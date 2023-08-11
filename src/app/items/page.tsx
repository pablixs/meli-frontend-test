//* https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=4

import api from "@/api"
import Link from "next/link"

const ItemsPage = async ({ searchParams }: { searchParams: { search: string } }) => {
    const { results } = await api.item.search(searchParams.search)

    console.log(results)

    return (
        <section>
            <article className="grid gap-4">
                {results.map((item) => (
                    <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4">
                        <img src={item.thumbnail} alt={item.title} />
                        <div>
                            <p className="font-bold text-lg">{Number(item.price).toLocaleString('es-AR', {style: 'currency', currency: item.currency_id})}</p>
                            <p>{item.title}</p>
                        </div>
                            <span className="ml-auto text-sm opacity-50 ">{item.seller_address.city.name}</span>
                    </Link>
                ))}
            </article>
        </section>
    )
}

export default ItemsPage