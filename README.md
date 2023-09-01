# nodejs-rabbitmq

## Sources

Sources that used this repository:
- [https://www.youtube.com/watch?v=wZbX_Qh8zbI&list=PL_f2F0Oyaj48lF-6Wr2d95dAMaye8RX0d&index=3](URL) - 1 Videoda #RabbitMQ Eğitimi | RabbitMQ Nedir? RabbitMQ Neden Kullanılır? RabbitMQ Nasıl Kurulur?


- 
An example that shows how to use rabbitmq with nodejs.

to run publisher use: `npm run publisher <queueName>`
  
to run consumer use: `npm run consumer <queueName>`
  
not: if you don't want to use custom queue name than just run without specifying queue name and it will automatically create a queue named as jobsQueue.
  
To use this app, you have to install rabbitmq and run it first. After you sure that you installed rabbitmq and runs on localhost:5672 you can use this app.
