import Entrance from "./Entrance"
import Rules from "./Rules"

function Section({ rules }) {
    return (
        <section className='card'>
            <div className="grid gap-5">
                <div>
                    <h1 className='text-xl font-medium border-b border-zinc-300'>{import.meta.env.VITE_BRAND_NAME} Kullanımı</h1>
                    <ul className='leading-10'>
                        {rules.map(rule => (
                            <Rules key={rule.id} rule={rule.rule} />
                        ))}
                    </ul>
                </div>
                <Entrance />
            </div>
        </section>
    )
}

export default Section