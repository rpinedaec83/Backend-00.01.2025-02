Sitemap: https://www.ionos.com/sitemap.xml

User-agent: *

#print
Disallow: /details-print

#terms and conditions
Disallow: /terms-

#Popups etc.
Disallow: /details-
Disallow: /popup
Disallow: /Feature
Disallow: /*-popup$

#Results
Allow: /server-configurator
Disallow: /domaincheckresult
Disallow: /tariffselect

#crawl delay
User-agent: Slurp
Crawl-delay: 300

User-agent: msnbot
Crawl-delay: 300

User-agent: dotbot
User-agent: kinshoo
Disallow: /