import os

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
APP_STATIC = os.path.join(APP_ROOT, 'dist')
APP_TEMPLATE = os.path.join(APP_ROOT, 'dist')
APP_DB = os.path.join(APP_ROOT, 'database')
MAX_WORKERS = 4
