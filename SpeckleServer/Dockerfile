# NODE
FROM node:10

# LABELS
LABEL version="1.x.x"
LABEL description="Speckle Server Docker Container Image"

# CREATE DIRS
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# INSTALL
COPY package*.json ./
RUN npm install --only=prod
# GET PLUGINS
RUN mkdir -p plugins/admin
RUN git clone https://github.com/speckleworks/SpeckleAdmin.git plugins/admin
WORKDIR /usr/src/app/plugins/admin
RUN npm install; npm run build

# VIEWER WILL BE DEPRECATED
# RUN mkdir -r plugins/viewer
# RUN git clone https://github.com/speckleworks/SpeckleViewer.git plugins/viewer
WORKDIR /usr/src/app
CMD ["node", "server.js"]
COPY . .
CMD ["node", "server.js"]
