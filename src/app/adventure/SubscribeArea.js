export default function SubscribeArea (){
    return (
        <div className="subscribe-area pt-80 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <p className="title">HABER BÜLTENİMİZE KAYDOLUN</p>
                            <h2>Seyahat fırsatları,<span></span> haberler ve ilham kaynakları için kaydolun</h2>
                            <p>Bizden haberler, promosyonlar ve diğer güzel şeylerle dolu e-postalar alan 300.000'den fazla küresel okuyucudan oluşan topluluğumuza katılın.</p>
                        </div>
                        <form action="adventure-1.html#" method="post" className="subscribe-form">
                            <input name="email" className="widget-input"
                                   placeholder="Enter your email address ......"
                                   type="email"/>
                            <button type="submit" className="widget-sbtn">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
