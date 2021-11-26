module.exports = {
  apps : [{
    name:'pm2-deploy',
    script: 'index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'root',
      host : '143.198.108.177',
      ref  : 'origin/main',
      repo : 'git@github.com:aalvarezv/pm2-deploy.git',
      path : '/var/www/pm2-deploy',
      //key : '/Users/alanalvarez/.ssh/id_rsa.pub',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --name pm2-deploy --env production',
      'pre-setup': ''
    }
  }
};
