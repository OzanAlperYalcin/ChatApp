import useInput from "../../hooks/useInput"
import { useChatContext } from "../context/ChatContext"

const gender = [
    {name: 'Erkek', value: 'male'},
    {name: 'Kadın', value: 'female'},
]

function Entrance() {

    const [values, setValues] = useInput()
    const { setData } = useChatContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(values)
    }
    
    return (
        <div className="w-3/4 md:w-2/4 mx-auto border border-zinc-300 rounded-xl bg-white drop-shadow-lg">
            <form onSubmit={(e) => handleSubmit(e)} className="grid gap-2 p-10">
                <h2 className="font-semibold text-sm text-center"> Giriş Bilgileriniz </h2>
                <input 
                    type="text" name="name" 
                    onChange={(e) => setValues(e)} 
                    className="login-input"
                    placeholder="Adınız / Rumuzunuz"
                    />
                <input 
                    type="text" name="room" 
                    onChange={(e) => setValues(e)} 
                    className="login-input"
                    placeholder="Oda Şifresi"
                    />
                <select name="gender" onChange={(e) => setValues(e)} className="login-input" placeholder="asd">
                    <option>Cinsiyet Seçiniz</option>
                    {gender.map(item => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                    ))}
                </select>
                <button type="submit" className="btn-primary">Giriş Yap!</button>
            </form>
        </div>
    )
}

export default Entrance