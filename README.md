## A Web Discussion Forum Site

### Set-up

#### Add ts-node and TS types Dependencies

yarn add -D ts-node  
   
yarn add -D @types/node typescript   
  
#### Install custom TS config from Ben Awad

npm install tsconfig.json   
   
#### Add Mikro-orm, PG, Express, Apollo Server, GraphQL and schema Dependencies

yarn add @mikro-orm/cli @mikro-orm/core @mikro-orm/migrations @mikro-orm/postgresql pg    
    
yarn add express apollo-server-express graphql type-graphql   
    
  
### Mikro-Orm

CLI    

npx mikro-orm migration:create   # Create new migration with current schema diff    

npx mikro-orm migration:up       # Migrate up to the latest version    

npx mikro-orm migration:down     # Migrate one step down    

npx mikro-orm migration:list     # List all executed migrations    

npx mikro-orm migration:pending  # List all pending migrations    
