// BlogDetailsSection.js
import React from "react";
import "./BlogDetailsSection.css"; // Make sure this path is correct

const BlogDetailsSection = () => {
  const designers = [
    { name: "Salma Moussa", link: "https://salmamoussa.com" },
    { name: "Shahd Mohammad", link: "https://shahdmohammad.com" },
    { name: "Nour Nasr", link: "https://nournasr.com" },
    { name: "Partinia Boktor", link: "https://partiniaboktor.com" },
    { name: "Habiba Elbanna", link: "https://habibaelbanna.com" },
    { name: "Habiba Saad", link: "https://habibasaad.com" },
  ];

  return (
    <section className="blog-detailssection">
      <div id="intro" className="margblog">
        <h1 className="femaltext">Female Graphic Designers in Egypt</h1>
        <h4 className="detailsblogdeyt">
          Over the past few years, graphic design and UI/UX design in Egypt have
          grown into something truly exciting — and at the center of it are so
          many amazing female designers. They’re blending art, culture, and
          technology to build designs that tell real stories and connect deeply
          with people.
        </h4>
        <h4 className="detailsblogdeyt">
          As someone who works in design, I’ve always admired how Egyptian women
          in graphic design and UI/UX approach their work — balancing aesthetics
          with purpose. Whether it’s creating brand identities, designing
          digital experiences, or exploring new ways to communicate visually,
          they’re shaping the future of Egypt’s creative scene. This blog is a
          small tribute to their talent, their passion, and the inspiration they
          bring to every project.
        </h4>
      </div>

      <div id="best-designer" className="margblog">
        <h1 className="femaltext">
          Who is considered one of the best female graphic designers in Egypt?
        </h1>
        <h4 className="detailsblogdeyt">
          Many people mention Nora Aly when talking about the most talented
          female graphic designers and UI/UX designers in Egypt. She’s built a
          name for herself through her creative approach that beautifully blends
          branding, typography, and visual storytelling. A graduate of the German
          University in Cairo, Nora has become a standout figure in the graphic
          design industry in Egypt, known for her modern, culturally rooted
          style. Her designs reflect both Egyptian identity and international
          quality — a balance that makes her work truly unique. Over the years,
          she’s gained recognition not only in Egypt but also across the Middle
          East and Europe, with her projects showcased in several global
          exhibitions and creative festivals.
        </h4>
      </div>

      <div id="salary" className="margblog">
        <h1 className="femaltext">
          What is the average salary for graphic designers in Egypt?
        </h1>
        <h4 className="detailsblogdeyt">
          Salaries for graphic designers in Egypt can vary a lot depending on
          experience, skills, and the type of work they do. A junior graphic
          designer just starting out in a local studio might earn between EGP
          2,500 and 3,500 per month, while mid-level designers with a few years
          of experience often make around EGP 5,000 to 7,000. Those who
          specialize in UI/UX design, branding, or digital design can earn
          significantly more — sometimes over EGP 10,000 per month, especially
          if they work with international clients or tech companies.
        </h4>
      </div>

      <div id="salary-factors" className="margblog">
        <h1 className="femaltext">What affects a designer’s salary in Egypt?</h1>
        <h4 className="detailsblogdeyt">
          A lot depends on your portfolio and how you position yourself in the
          creative industry in Egypt. Designers who focus on UI/UX, motion
          graphics, or brand strategy usually earn higher salaries because
          these skills are in high demand. Working remotely for global clients
          or agencies can also greatly increase income, since UI/UX design
          salaries in Egypt tend to rise when you work with international
          projects or large organizations.
        </h4>
      </div>

      <div id="challenges" className="margblog">
        <h1 className="femaltext">
          What Challenges Do Female Designers Face in Egypt’s Creative Industry?
        </h1>
        <h4 className="detailsblogdeyt">
          Many female graphic designers and UI/UX designers in Egypt still face
          challenges as they build their careers. Some struggle to be recognized
          or taken seriously in a field that’s often seen as male-dominated.
          Others find it difficult to balance creative work with personal
          responsibilities, especially with tight deadlines and long hours.
        </h4>
      </div>

      <div className="margblog">
        <h1 className="femaltext">Designers I Admire</h1>
        <p className="detailsblogdeyt">
          As a UX/UI and graphic designer, I constantly find inspiration in the
          work of talented creatives around me. Here are some of the designers
          whose work I deeply admire — each bringing a unique vision, style, and
          passion to the design world:
        </p>

        <ul className="designerlist">
          {designers.map((designer) => (
            <li key={designer.name}>
              <a
                href={designer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="detailsblogdeyt"
              >
                {designer.name}
              </a>
            </li>
          ))}
        </ul>

        <p className="detailsblogdeyt">
          Each of them has a strong sense of identity in their design approach
          — from modern minimalism to expressive storytelling — and their work
          continues to inspire me to grow as a designer every day.
        </p>
      </div>

      <div id="conclusion" className="margblog">
        <h1 className="femaltext">In Conclusion</h1>
        <h4 className="detailsblogdeyt">
          The impact of women in Egypt’s UX/UI and graphic design industry is
          impossible to ignore. Their creativity, empathy, and storytelling
          have transformed how design is understood and experienced. By blending
          modern digital trends with Egypt’s unique cultural identity, female
          graphic designers and UI/UX designers have helped shape a more
          emotional, authentic, and user-centered creative scene.
        </h4>
        <h4 className="detailsblogdeyt">
          Today, women in Egypt aren’t just participating in design — they’re
          leading it. From branding and digital design to user experience and
          visual storytelling, they’re redefining what creativity looks like in
          the modern world. Their presence reminds us that great design isn’t
          only about visuals — it’s about connection, emotion, and purpose.
        </h4>
        <h4 className="detailsblogdeyt">
          The future of the creative industry in Egypt is clearly being shaped
          by women who design with heart, vision, and the courage to make a
          difference.
        </h4>
      </div>
    </section>
  );
};

export default BlogDetailsSection;