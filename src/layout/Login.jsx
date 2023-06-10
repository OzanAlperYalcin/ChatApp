import Header from '../components/login/Header'
import Section from '../components/login/Section'
import Footer from '../components/login/Footer'

const rules = [
  { id: 1, rule: '1- Chat yapmak istediğiniz adı girin.' },
  { id: 2, rule: '2- Oda açmak istiyorsanız istediğiniz bir şifreyi, odaya katılmak istiyorsanız oda sahibinin size verdiği şifreyi giriniz.' },
  { id: 3, rule: '3- Artık odadasınız iyi sohbetler.' },
]

function Login() {

  return (
    <div className="h-screen grid bg-black">
        <div className="container mx-auto z-50">
          <Header />
          <Section rules={rules} />
        </div>
      <Footer />
    </div>
  )
}

export default Login