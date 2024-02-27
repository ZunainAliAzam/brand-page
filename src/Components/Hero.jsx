const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVES THE BEST</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          aliquid illo enim eveniet iusto maxime? Animi, labore esse dignissimos
          neque id eum cumque voluptatum at ratione eveniet? Alias, qui
          mollitia!
        </p>

        <div className="hero-btn">
            <button className="hero_btn">SHOP NOW</button>
            <button className="hero_btn">CATEGORY</button>
        </div>

        <div className="brand-icons">
            <p>Also Available On:</p>
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
        </div>
      </div>
      <div className="image">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </div>
  );
};

export default Hero;
