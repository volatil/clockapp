import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { randomnumber, quotes } from "../helpers/helpers";

import css from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
	let quote = quotes();
	quote = quote[randomnumber(0, 8)];

	const forestDay = `/assets/images/day/forest${randomnumber(1, 6)}.jpg`;

	return {
		props: { forestDay, quote },
	};
}

export default function Home({ forestDay, quote }) {
	return (
		<>
			<Head>
				<title>Clock App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={css.main}>
				<section className={css.superior} style={{ background: `url("${forestDay}")`, backgroundSize: "cover" }}>
					<div className={css.quote}>
						<p>{`"${quote}"`}</p>
						<strong>Ada Lovelace</strong>
					</div>

					<div className={css.hora}>
						<div className={css.mensaje}>
							<img src="/assets/svg/sun.svg" alt="sol/luna" style={{ width: "40px" }} />
							<p>good morning</p>
						</div>
					</div>
					<div className={css.ciudadyboton}>
						<div className={css.ciudad}>
							<p>IN LONDON, UK</p>
						</div>
						<div className={css.vermasmens}>
							<button type="button">more</button>
						</div>
					</div>
				</section>

				<section className={css.inferior}>
					<div>
						<p className="titulo">CURRENT TIMEZONE</p>
						<p className="grande">Europe/London</p>
					</div>
					<div>
						<p className="titulo">DAY OF THE WEEK</p>
						<p className="grande">5</p>
					</div>
					<div>
						<p className="titulo">DAY OF THE YEAR</p>
						<p className="grande">295</p>
					</div>
					<div>
						<p className="titulo">WEEK NUMBER</p>
						<p className="grande">42</p>
					</div>
				</section>
			</main>
		</>
	);
}
