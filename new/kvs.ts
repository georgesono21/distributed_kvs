import fs from 'fs';


class keyValueStore {
    private store: { [key: string]: string } = {};
    
    constructor() {
        const data = fs.readFileSync('db/data.json', 'utf8');
        this.store = JSON.parse(data);
    }
    
    set(key: string, value: string): void {
        this.store[key] = value;
        fs.writeFileSync('db/data.json', JSON.stringify(this.store, null, 2));
    }
    
    get(key: string): string | undefined {
        return this.store[key];
    }
    
    delete(key: string): void {
        delete this.store[key];
        fs.writeFileSync('db/data.json', JSON.stringify(this.store, null, 2));
    }
    
    clear(): void {
        this.store = {};
    }
    
    keys(): string[] {
        return Object.keys(this.store);
    }

    print(): void {
        return Object.entries(this.store).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
    }

}

export