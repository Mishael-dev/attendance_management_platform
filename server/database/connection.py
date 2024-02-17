from sqlalchemy import create_engine
          
db_url = "postgresql://postgres:*f3Gb4FdE1cfC-a*2D5e2d634aCADdaD@viaduct.proxy.rlwy.net:50466/railway"

engine = create_engine(db_url)