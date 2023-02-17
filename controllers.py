from flask import render_template, url_for,request, redirect
from flask_login import login_user, logout_user, login_required,current_user
from werkzeug.security import check_password_hash
from models import *
from app import app
from forms import *
import datetime

@app.route('/signup', methods=['GET','POST'])
def signup():
    form=RegisterForm()
    if request.method=='POST':
        post_data=request.form
        form = RegisterForm(data=post_data)
        if form.validate_on_submit():
            user= User(first_name=form.first_name.data, last_name=form.last_name.data,email=form.email.data,password=form.password.data,is_active=True,is_superuser=False)
            user.save()
            return redirect('/signin')
    return render_template('signup.html',form=form)

@app.route('/signin', methods=["GET","POST"])
def signin():
    form=LoginForm()
    alert=''
    if request.method=='POST':
        post_data=request.form
        form=LoginForm(data=post_data)
        if form.validate_on_submit():
            email=User.query.filter_by(email=form.email.data).first()
            if email and check_password_hash(email.password, form.password.data):
                login_user(email)
                return redirect('/')
            else:
                alert='*Email veya sifre yanlisdir yaxsi fikirles gorum'
    return render_template('signin.html', form=form, alert=alert)

@app.route('/signout')
@login_required
def signout():
    logout_user()
    return redirect('/')

@app.route("/")
def index():
    all_books=Book.query.all()
    return render_template('index.html',books=all_books)

@app.route("/product")
def product():
    return render_template('product.html', name='Incogndito', price='12AZN', old_price='15AZN', bio='Tanınmış nevroloq D.İqlmenin 20-dən çox dilə tərcümə edilən və indidən klassik əsərə çevrilən bu kitabı beynin sirli dünyasına təcrübələr, elmi biliklər və tarixi faktlar işığında səyahət edir. Kitab tibbi mövzuda olsa da, müəllif yazarlıq məharətini və zəngin biliyini birləşdirərək elmi faktları sadə və müqayisəli dillə oxucularına təqdim edir. Müəllif əsər boyu sədaqət geni, qumarbazlara çevrilən parkinson xəstələri, gen-mühit əlaqəsi, <u>“yaxşı”</u> və <u>“pis”</u> gen, şüuraltı və qərarvermə mexanizmi, məsuliyyət anlayışı, beynin insan həyatında rolu kimi bir çox mövzulara toxunur. Alim bu mövzuların beyinlə əlaqəsini izah etməklə kifayətlənmir, beyinlə bağlı müxtəlif formullar və modellər irəli sürür. İnsan psixologiyası və davranışlarına neyron və gen prizmasından baxmağı öyrədir. Elmi- populyar dildə yazılmış bu kitab xüsusən müəllimlər, psixoloqlar, valideynlər, həkimlər üçün mühüm bilikləri ehtiva edir. Alim bu mövzuların beyinlə əlaqəsini izah etməklə kifayətlənmir, beyinlə bağlı müxtəlif formullar və modellər irəli sürür. İnsan psixologiyası və davranışlarına neyron və gen prizmasından baxmağı öyrədir. Elmi- populyar dildə yazılmış bu kitab xüsusən müəllimlər, psixoloqlar, valideynlər, həkimlər üçün mühüm bilikləri ehtiva edir.', img_url=url_for('static', filename='assets/images/Inkognito.png'), stok="2", dil="Azerbaycanca", janr='Pisxologiya', muellif='David Eagleman', nesriyyat='Qanun Nesriyyat')

@app.route('/book/<int:book_ind>', methods=['GET','POST'])

def book(book_ind):
    all_books=Book.query.all()
    genres=Genre.query.all()
    lang=Language.query.all()
    books=all_books[(book_ind)-1]
    genre=genres[books.genre_id-1]
    language=lang[books.language_id-1]
    all_user=User.query.all()
    all_comment=Comments.query.all()

    form=CommentForm()
    if request.method=="POST":
        post_data=request.form
        form=CommentForm(data=post_data)
        if form.validate_on_submit():
            t=datetime.datetime.now()
            time= t.strftime("%c")
            comment=Comments(text=form.text.data, book_id=book_ind, user_id=current_user.id, time=time)
            comment.save()
            return redirect(f'/book/{book_ind}')
    
    return render_template('book.html', book=books, genre=genre, lang=language, form=form, user=all_user, comments=all_comment) 