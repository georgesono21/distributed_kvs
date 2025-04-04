# distributed_kvs

## goals:
1. Make it distributed (duh)
    - build in paritioning and sharding for fault tolerance
2. a non-volatile KVS,
    - if it goes down, all our information isn't lost
3. consistent (let's start with strong consistency first)
    - state of kvs is the same across all nodes in system. if we get strong consistency, then we can do 
4. fault tolerant
    - our distributed system can still function with nodes down!

## protocols i want to implement:
1. vector clocks
    - to synchronize state between machine
2. raft/paxos protocol for consensus (syncing node states with kvs)

## node communication
- I will probably use HTTP! 

## challenges i am probably going to run into
- many many race conditions
- trying to get them to commmunicate in their own networks
- hopefully that's it!

## we shall do this one step at a time, and i will make a roadmap of how i will do this!

1. one single KVS 
2. distributed KVS with replicas
3. sharded KVS

^ each of these will be their own branch

## now, choice of language... typescript! 
because i can...

## API of the kvs

- create key
- delete key
- update key's value
