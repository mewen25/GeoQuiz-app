import React from 'react';

export default function ActivitySection({ type, text, reverse=false, link, actions }) {
    const styles = {
        quiz: {
            txt: "#5DBCFB",
        },
        learn: {
            txt: "#E69674"
        },
        multi: {
            txt: "#67C871"
        }
    };
    return (
        <section data-aos="fade-up" data-aos-duration="1000" className="scroll-link-section" style={{flexDirection: reverse ? "row-reverse" : "row"}}>
            <article className="link-section-text">
                <h1 style={{color: styles[type].txt}}>{text?.title}</h1>
                <h4>{text?.subHeading}</h4>
                <p><span className="pre-description">{text?.preDescription}</span>{text?.description}</p>
                <a href="##" style={{color: styles[type].txt}}>{link.txt}</a>
            </article>

            <article className="link-section-links">
                <img alt={type} src={require(`../../assets/images/home/scroll/${type}-example.png`)} />
                {/* {actions.map(a => (
                    <div className="link-section-links-action">
                        <p>{a?.txt}</p>
                        <img alt={a.txt} src={require(`../../assets/images/home/scroll/section/${a?.img}`)} />
                    </div>
                ))} */}
            </article>
        </section>
    )
}