#!python3

import os
import time
from datetime import datetime
from tornado import ioloop, web, websocket, gen
from tornado.escape import json_encode, json_decode, url_escape, url_unescape
import server_settings

class BaseHandler(web.RequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def get_current_user(self):
        return self.get_secure_cookie("test.local")

class MainHandler(BaseHandler):
    @gen.coroutine
    def get(self):
        self.render("index.html")

def make_app():
    return web.Application([
        (r"/", MainHandler),
        (r"/static/(.*?)", web.StaticFileHandler, {"path": server_settings.APP_STATIC}),
    ], **settings)

settings = {
    "autoreload": True,
    "debug": False,
    "template_path": server_settings.APP_TEMPLATE,
    "cookie_secret": "FIejo7jmT0bS8odYIEVWq3BM7ENUBVVUptpD1bUmHQvU0unFYQz7lAZNRqDjURgFuEtRQPtioZAlwncrx7iYnuRHdWYf4KoSVKYc4FYv0ahRuNkHKp1iJb5iBrSbFR1p03oQZ+k3EYCQVT5DUUHg5WAiIweOEMGMhSBCtf9opKWKy2EX2H3Q/FJch9FV7dM/eXby7R7vu20lblk89liJM5LFCyTTqPGWH4nDxe+aI6E13DTwBRCz8NC4qpH+WPAfb9hOlLTydo4=",
    "xsrf_cookies": True,
    #"login_url": "/login",
}

if __name__ == "__main__":
    app = make_app()
    app.listen(10000)
    ioloop.IOLoop.current().start()