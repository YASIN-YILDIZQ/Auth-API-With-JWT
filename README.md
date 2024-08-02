1. User Model (Kullanıcı Modeli)
Ne İşe Yarar:

Kullanıcı bilgilerini yönetir.
Şifrelerin güvenliğini sağlamak için hashler ve token oluşturur.
Kullanım:

Kullanıcı şifrelerini güvenli bir şekilde saklamak için hashPassword fonksiyonu kullanılır.
Kullanıcı oturumlarını yönetmek için JWT tokenlar oluşturmak üzere generateToken fonksiyonu kullanılır.
Şifre sıfırlama işlemleri için geçici bir token oluşturmak üzere generateResetToken fonksiyonu kullanılır.

2. Admin Router (Yönetici Yönlendirme)
Ne İşe Yarar:

Yönetici rolündeki kullanıcıların, diğer kullanıcılar üzerinde çeşitli işlemler yapmasına olanak tanır.
Kullanım:

/block/:id endpoint'i ile bir kullanıcıyı engelleyebilirsiniz.
/delete/:id endpoint'i ile bir kullanıcıyı silebilirsiniz.
Örnek Kullanım:

bash
Kodu kopyala
POST /admin/block/123  # Kullanıcı ID'si 123 olan kullanıcıyı engeller
DELETE /admin/delete/123  # Kullanıcı ID'si 123 olan kullanıcıyı siler

3. Answer Router (Cevap Yönlendirme)
Ne İşe Yarar:

Kullanıcıların cevap eklemesi, düzenlemesi, silmesi ve beğenmesi gibi işlemleri yönetir.
Kullanım:

/add endpoint'i ile yeni bir cevap ekleyebilirsiniz.
/edit/:id endpoint'i ile mevcut bir cevabı düzenleyebilirsiniz.
/delete/:id endpoint'i ile bir cevabı silebilirsiniz.
/like/:id endpoint'i ile bir cevabı beğenebilirsiniz.
Örnek Kullanım:

bash
Kodu kopyala
POST /answers/add  # Yeni bir cevap ekler
PUT /answers/edit/123  # ID'si 123 olan cevabı günceller
DELETE /answers/delete/123  # ID'si 123 olan cevabı siler
POST /answers/like/123  # ID'si 123 olan cevabı beğenir

4. Auth Router (Kimlik Doğrulama Yönlendirme)
Ne İşe Yarar:

Kullanıcı kayıt, oturum açma ve şifre sıfırlama işlemlerini yönetir.
Kullanım:

/register endpoint'i ile yeni bir kullanıcı kaydı oluşturabilirsiniz.
/login endpoint'i ile mevcut bir kullanıcı oturumu açabilirsiniz.
/reset-password endpoint'i ile şifre sıfırlama işlemi başlatabilirsiniz.
Örnek Kullanım:

bash
Kodu kopyala
POST /auth/register  # Yeni bir kullanıcı kaydı oluşturur
POST /auth/login  # Kullanıcı oturumunu açar
POST /auth/reset-password  # Şifre sıfırlama işlemi başlatır

5. Index Router (Ana Yönlendirme)
Ne İşe Yarar:

API'nin ana giriş noktasıdır ve diğer yönlendirme modüllerini birleştirir.
Kullanım:

Diğer router'ları (userRouter, adminRouter, answerRouter, authRouter, questionRouter) bir araya getirir ve yapılandırır.
Örnek Kullanım:

Örneğin, /users, /admin, /answers, /auth, /questions gibi endpoint'lere erişim sağlar.

6. Question Router (Soru Yönlendirme)
Ne İşe Yarar:

Soruların eklenmesi, düzenlenmesi, silinmesi ve beğenilmesi gibi işlemleri yönetir.
Kullanım:

/add endpoint'i ile yeni bir soru ekleyebilirsiniz.
/edit/:id endpoint'i ile mevcut bir soruyu düzenleyebilirsiniz.
/delete/:id endpoint'i ile bir soruyu silebilirsiniz.
/like/:id endpoint'i ile bir soruyu beğenebilirsiniz.
Örnek Kullanım:

bash
Kodu kopyala
POST /questions/add  # Yeni bir soru ekler
PUT /questions/edit/123  # ID'si 123 olan soruyu günceller
DELETE /questions/delete/123  # ID'si 123 olan soruyu siler
POST /questions/like/123  # ID'si 123 olan soruyu beğenir

Genel Kullanım Senaryosu
Kullanıcı Kayıt ve Oturum Açma:

Bir kullanıcı, /auth/register endpoint'i ile kayıt olur ve /auth/login endpoint'i ile giriş yapar.
Cevap ve Soru Yönetimi:

Kullanıcılar, /answers/add ve /questions/add endpoint'leri ile cevap ve soru ekleyebilir.
Yönetici, /admin/block/:id ile kullanıcıyı engelleyebilir ve /admin/delete/:id ile kullanıcıyı silebilir.
Şifre Sıfırlama:

Şifre sıfırlama işlemi /auth/reset-password endpoint'i ile başlatılır.
