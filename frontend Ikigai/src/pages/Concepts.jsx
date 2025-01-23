import React, { useState } from "react";

const philosophies = [
  {
    title: "Kanso (Simplicity)",
    description: "Embrace simplicity by eliminating clutter in your life.",
    image: "https://i.pinimg.com/1200x/27/0e/e5/270ee517528bd8d391d4fb79b9620254.jpg",
    extraInfo: "Kanso is about embracing minimalism, removing unnecessary elements, and living a life with focus and clarity. It encourages simplicity in design, art, and lifestyle to create balance and tranquility."
  },
  {
    title: "Fukinsei (Asymmetry)",
    description: "Find beauty in imperfection and natural imbalance.",
    image: "https://i.pinimg.com/736x/61/94/3e/61943e28956fb1a5324f436c7a9dc573.jpg",
    extraInfo: "Asymmetry in design or nature often creates a sense of dynamic harmony. It speaks to the beauty in natural imperfection, where balance is achieved not through symmetry but through variation and contrast."
  },
  {
    title: "Shibumi (Subtle Beauty)",
    description: "Appreciate understated elegance and timeless beauty.",
    image: "https://i.pinimg.com/736x/98/34/40/9834401b9a7dc80403ab2b2d70803a66.jpg",
    extraInfo: "Shibumi reflects the idea of quiet, subtle beauty that does not seek attention. It suggests an effortless grace that is revealed through simplicity and calmness, without excessive ornamentation."
  },
  {
    title: "Seijaku (Tranquility)",
    description: "Prioritize calmness and stillness in your daily life.",
    image: "https://i.pinimg.com/736x/f0/d2/5a/f0d25a6055d767990266dbf6fafaed59.jpg",
    extraInfo: "Seijaku encourages creating moments of stillness, even amidst a busy or chaotic world. It is a state of inner peace that can be achieved through mindfulness, meditation, and slowing down."
  },
  {
    title: "Yugen (Profound Grace)",
    description: "Recognize the mysterious and subtle aspects of life.",
    image: "https://i.pinimg.com/736x/f0/d2/5a/f0d25a6055d767990266dbf6fafaed59.jpg",
    extraInfo: "Yugen describes a deep awareness of the universe and its beauty, evoking a sense of awe at the mystery of life. It is an appreciation for the intangible and elusive qualities that cannot be fully expressed in words."
  },
  {
    title: "Datsuzoku (Freedom from Routine)",
    description: "Break free from monotony and embrace spontaneity.",
    image: "https://i.pinimg.com/736x/31/22/d6/3122d666c1fc8e3faf07e0c8ec052b0a.jpg",
    extraInfo: "Datsuzoku represents liberation from the rigidity of routine. It encourages stepping outside the box, being spontaneous, and embracing new experiences to refresh the mind and spirit."
  },
  {
    title: "Wabi-Sabi (Acceptance of Transience)",
    description: "Appreciate imperfection and the transient nature of all things.",
    image: "https://i.pinimg.com/736x/49/bb/50/49bb50170d0e289bca1deda901592a4e.jpg",
    extraInfo: "Wabi-Sabi is the philosophy of finding beauty in the imperfect, the transient, and the aged. It teaches that all things, even those that seem flawed or decaying, have a certain timeless grace."
  },
  {
    title: "Shikata ga nai (Acceptance)",
    description: "Accept circumstances beyond your control with grace.",
    image: "https://i.pinimg.com/736x/9b/dd/66/9bdd6637d0a7a0784c636cdda2f0e89e.jpg",
    extraInfo: "This concept embodies the ability to gracefully accept what cannot be changed. It is about surrendering to fate and circumstances, without resistance, and maintaining peace in the face of adversity."
  },
  {
    title: "Gaman (Endurance with Patience)",
    description: "Demonstrate quiet strength and emotional resilience.",
    image: "https://i.pinimg.com/736x/c7/c6/3a/c7c63ab4424cb35508e901e731871eaf.jpg",
    extraInfo: "Gaman emphasizes endurance through difficult times. It is about maintaining patience, perseverance, and inner strength, while quietly dealing with challenges without complaint."
  },
  {
    title: "Oubaitori (No Comparison)",
    description: "Celebrate your individuality and unique journey.",
    image: "https://i.pinimg.com/736x/d0/40/58/d04058d71a2fd5e8cbe441ccb5d9b232.jpg",
    extraInfo: "Oubaitori teaches that comparing oneself to others is futile. It is about embracing your unique path and celebrating your own growth and journey without being distracted by the progress of others."
  },
  {
    title: "Kaizen (Continuous Improvement)",
    description: "Focus on small, steady changes for lifelong learning and development.",
    image: "https://i.pinimg.com/736x/c0/22/1b/c0221b2b9288399f5881ae8404618802.jpg",
    extraInfo: "Kaizen encourages incremental improvement. By making small, continuous changes over time, you can achieve significant long-term results, whether in personal habits, work, or life."
  },
  {
    title: "Mono no Aware (Pathos of Things)",
    description: "Cherish fleeting moments and the beauty of impermanence.",
    image: "https://i.pinimg.com/736x/06/58/ef/0658ef4e40c8a5902ec27451204a0cc8.jpg",
    extraInfo: "Mono no Aware acknowledges the bittersweet nature of existence. It is the awareness of the fleeting beauty of life and the impermanence of all things, encouraging us to savor each moment."
  },
  {
    title: "Ikigai (Purpose in Life)",
    description: "Find your reason for being and what brings you fulfillment.",
    image: "https://i.pinimg.com/736x/4a/8f/dc/4a8fdccbe64cadc589f222604b25df6a.jpg",
    extraInfo: "Ikigai is about discovering your true purpose in life, the intersection of what you love, what you’re good at, what the world needs, and what you can be paid for. It’s the key to finding lasting fulfillment."
  },
  {
    title: "Kenjō (Modesty and Deference)",
    description: "Maintain humility and focus on collective well-being.",
    image: "https://i.pinimg.com/736x/47/29/6b/47296b7344db74b1abf16757ea39264e.jpg",
    extraInfo: "Kenjō emphasizes modesty, humility, and respect for others. It is about knowing your place and focusing on the greater good, rather than self-promotion or individual recognition."
  },
  {
    title: "Honne and Tatemae (True Feelings vs. Public Face)",
    description: "Prioritize harmony by balancing personal feelings with group dynamics.",
    image: "https://i.pinimg.com/736x/14/7d/74/147d743435b5fc893b6ddc08f415c939.jpg",
    extraInfo: "This concept highlights the difference between one's true feelings (honne) and the public facade (tatemae). It teaches the importance of balancing personal truth with social harmony and expectations."
  },
  {
    title: "Shu Ha Ri (The Path to Mastery)",
    description: "Progress through learning stages to eventually innovate independently.",
    image: "https://i.pinimg.com/736x/d6/18/b0/d618b01e11b7f7157453ce2f710a1e43.jpg",
    extraInfo: "Shu Ha Ri represents the three stages of mastery: 'Shu' (follow the rules), 'Ha' (break the rules), and 'Ri' (transcend the rules). This path guides learners toward innovation and independence."
  },
  {
    title: "Jiritsu (Self-Reliance)",
    description: "Cultivate independence while respecting community roles.",
    image: "https://i.pinimg.com/736x/e3/0e/c6/e30ec63ac0872b487428c3520ec3c780.jpg",
    extraInfo: "Jiritsu emphasizes the importance of self-reliance, where individuals take responsibility for their actions while maintaining their place in a larger community context."
  },
];

export function Concepts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % philosophies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? philosophies.length - 1 : prevIndex - 1
    );
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    
    <div className="relative w-full max-w-xl mx-auto mt-14">
      <h1 className="text-3xl font-tsukimi text-center p-28">Ikiga-I</h1>
      <h1 className="text-4xl font-gotu text-center">Concepts</h1>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {philosophies.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-4 text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(item)}
              />
              <h2 className="text-2xl font-gotu font-bold mt-4">{item.title}</h2>
              <p className="text-xl font-gotu mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-500 text-white rounded-3xl p-2" style={{ marginTop: '70px'}}
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-500 text-white rounded-3xl p-2" style={{ marginTop: '70px'}}
      >
        &#8594;
      </button>

      <div className="flex justify-center mt-4">
        {philosophies.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 mx-1 rounded-full cursor-pointer ${
              currentIndex === index 
            }`}
          ></div>
        ))}
      </div>

      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <img
              src={modalContent.image}
              alt={modalContent.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-gotu font-bold mt-4">
              {modalContent.title}
            </h2>
            <p className="text-xl font-gotu mt-2">{modalContent.description}</p>

            <div className="mt-4">
              <h3 className="text-lg font-bold font-gotu">What it means</h3>
              <p className="mt-2 font-gotu">{modalContent.extraInfo}</p>
            </div>

            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-slate-500 text-white rounded-lg font-gotu"
            >
              Close
            </button>
          </div>
        </div>
      )}

     
      <nav className="fixed bottom-0 left-0 w-full bg-slate-500 text-white py-4">
        <div className="flex justify-around text-center">
          <button className="text-lg font-gotu hover:bg-slate-600 rounded">
            Explore
          </button>
          <button className="text-lg font-gotu hover:bg-slate-600 rounded">
            Ikigai Map
          </button>
          <button className="text-lg font-gotu hover:bg-slate-600 rounded">
            About
          </button>
          <button className="text-lg font-gotu hover:bg-slate-600 rounded">
            Me
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Concepts;
