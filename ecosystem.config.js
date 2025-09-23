// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: "eventform",
            cwd: "/home/beh-aa/htdocs/aa.beh.land/eventForm",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3002",
            instances: 1,
            exec_mode: "fork",
            watch: false,
            env: {
                NODE_ENV: "production",
                PORT: "3002",
                DATABASE_URL: "file:./dev.db"
            }
        }
    ]
}
