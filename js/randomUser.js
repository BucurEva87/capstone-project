import utils from './utils.js';

export async function grabRandomUser(gender = '') {
  const request = await fetch(`https://randomuser.me/api/`);
  let user = await request.json();
  user = user.results[0];

  return {
    gender: user.gender,
    country: user.location.country,
    name: `${user.name.last} ${user.name.first}`,
    picture: user.picture.large,
  };
}

export async function populateUsers(speakers) {
  const container = utils.qs('.speakers-container');

  speakers.forEach((speaker) => {
    const language = ['JavaScript', 'PHP', 'C++', 'Python', 'Ruby', 'Kotlin'][
      Math.floor(Math.random() * 6)
    ];

    const article = utils.createElement({
      tagName: 'article',
    });

    article.appendChild(
      utils.createElement({
        tagName: 'img',
        src: speaker.picture,
        alt: `Image for ${speaker.name}`,
      })
    );

    const div = utils.createElement({
      class: 'speaker-info',
    });

    div.appendChild(
      utils.createElement({
        tagName: 'h3',
        class: 'name',
        textContent: speaker.name,
      })
    );
    div.appendChild(
      utils.createElement({
        tagName: 'h3',
        class: 'language',
        textContent: language,
      })
    );
    div.appendChild(
      utils.createElement({
        tagName: 'p',
        class: 'title',
        textContent: `Professor of ${language}`,
      })
    );
    article.appendChild(div);
    article.appendChild(
      utils.createElement({
        tagName: 'p',
        class: 'speaker-description',
        //   textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        // Consectetur natus ipsam nobis itaque deleniti, beatae et amet
        // minima iste in. Blanditiis neque aut itaque quae praesentium
        // earum aperiam ea laborum.`,
        textContent: `Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.
        (Main books: The Wealth of the Network , Penguins and Leviathan )`,
      })
    );

    container.appendChild(article);
  });
}
