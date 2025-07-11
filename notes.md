ls /etc/nginx/sites-enabled/

rm /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx



pm2 save
pm2 startup
