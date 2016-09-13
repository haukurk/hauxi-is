# hauxi.is

Personal web front for www.hauxi.is. 

# Getting up and running
Start by installing dependencies:
```
npm install
```

Configure settings:
* local/connections.js, for configuring database access for the ORM.
* local/mailgun.js, for configuring api access to Mailgun email services.
I provided a sample file for both.

Lift the express server:
```
sails lift
```

# Dockerizing the app!
My prefered way of deploying anything these days is using Docker.

Quickly get the site up and running by doing:

Build the docker container by running the following command in the repo root:
```
docker build -t "hauxi-is-webpage" .
```

Create and run the container in the current shell:
```
docker run -p 1337:1337 -it "hauxi-is-webpage"
```

Create a systemd entry for it (Using RHEL/CentOS):
```
sudo tee /etc/systemd/system/docker-hauxi_is.service  <<-'EOF'
[Unit]
Description=Hauxi.is Webpage Container
Requires=docker.service
After=docker.service

[Service]
Restart=always
ExecStart=/usr/bin/docker start -a [container name or id] 
ExecStop=/usr/bin/docker stop -t 2 [container name or id] 

[Install]
WantedBy=default.target
EOF
```

Set autostart and start (Again for CentOS/RHEL):
```
systemctl enable docker-hauxi_is
systemctl start docker-hauxi_is
```

BOOM!