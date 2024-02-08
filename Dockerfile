FROM node:14.19.1
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
