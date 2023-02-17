from extensions import db, login_manager
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
class Genre(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    name=db.Column(db.String(255),nullable=False)
    def __repr__(self):
        return f'{self.name}'
    def __init__(self,name):
        self.name=name
    def save(self):
        db.session.add(self)
        db.session.commit()

class Language(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    lang_name=db.Column(db.String(255),nullable=False)
    def __repr__(self):
        return f'{self.lang_name}'
    def __init__(self,lang_name):
        self.lang_name=lang_name
    def save(self):
        db.session.add(self)
        db.session.commit()

class Book(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    title=db.Column(db.String(255),unique=True)
    author=db.Column(db.String(255),nullable=False)
    description=db.Column(db.Text,nullable=True,default="")
    price=db.Column(db.Float,default=10.00)
    image_url=db.Column(db.Text)
    stock=db.Column(db.Integer)
    genre_id=db.Column(db.Integer,db.ForeignKey('genre.id'),nullable=False)
    language_id=db.Column(db.Integer,db.ForeignKey('language.id'),nullable=False)
    publisher=db.Column(db.String(255))
    def __repr__(self):
        return f'{self.title}'
    def __init__(self,title,author,description,price,image_url,stock,genre_id,language_id,publisher):
        self.title=title
        self.author=author
        self.description=description
        self.price=price
        self.image_url=image_url
        self.stock=stock
        self.genre_id=genre_id
        self.language_id=language_id
        self.publisher=publisher
    def save(self):
        db.session.add(self)
        db.session.commit()


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(user_id)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer,primary_key=True)
    first_name=db.Column(db.String(30),nullable=False)
    last_name=db.Column(db.String(30),nullable=False)
    email=db.Column(db.String(30),nullable=False,unique=True)
    password=db.Column(db.String(255),nullable=False)
    is_active=db.Column(db.Boolean, nullable=True)
    is_superuser=db.Column(db.Boolean, nullable=True)

    def __repr__(self):
        return f'{self.email}'

    def __init__(self, first_name, last_name, email, password, is_active, is_superuser):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.password=generate_password_hash(password)
        self.is_active=is_active
        self.is_superuser=is_superuser

    def save(self):
        db.session.add(self)
        db.session.commit()

    def set_password(self, new_password):
        self.password = generate_password_hash(new_password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

class Comments(db.Model):
    id = db.Column(db.Integer,primary_key=True)
    text=db.Column(db.String(500),nullable=False)
    time=db.Column(db.String(100),nullable=False)
    book_id=db.Column(db.Integer,db.ForeignKey('book.id'),nullable=False)
    user_id=db.Column(db.Integer,db.ForeignKey('user.id'),nullable=False)

    def __repr__(self):
        return f'{self.text}'

    def __init__(self, text, book_id, user_id, time):
        self.text=text
        self.time=time
        self.book_id=book_id 
        self.user_id=user_id

    def save(self):
        db.session.add(self)
        db.session.commit()

