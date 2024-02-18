from sqlalchemy import create_engine
          
db_url = "postgresql://postgres:56bcgDFBccCAg3*bC6B3e42G6EgD-2ge@roundhouse.proxy.rlwy.net:56406/railway"

engine = create_engine(db_url)