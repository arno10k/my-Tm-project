FROM node:25.2.1

WORKDIR /app

COPY . /app

WORKDIR /app/tm

RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# To run this dockerfile execute following commands in terminal:
# docker build -t my-app . 
# docker run --rm -it -p 5173:5173 my-app
