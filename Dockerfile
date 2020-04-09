# NODE
FROM node:10

ENV MONGO_URI "mongodb+srv://cluster0-vif11.azure.mongodb.net/test --username rodney"
ENV REDIS_URL "speckle-test-redis.redis.cache.windows.net:6380,password=BHn7l23hsWCieFjdMB9K6QPaxYL7nUIDlmjil4vOXWI=,ssl=True,abortConnect=False"

# LABELS
LABEL version="1.x.x"
LABEL description="Speckle Server Docker Container Image"

# CREATE DIRS
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# INSTALL
COPY package*.json ./
RUN npm install
# GET PLUGINS
RUN mkdir -p plugins/admin
RUN git clone https://github.com/speckleworks/SpeckleAdmin.git plugins/admin

# VIEWER WILL BE DEPRECATED
# RUN mkdir -r plugins/viewer
# RUN git clone https://github.com/speckleworks/SpeckleViewer.git plugins/viewer

COPY . .
CMD ["node", "server.js"]
