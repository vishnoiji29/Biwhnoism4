<?xml version='1.0' encoding='UTF-8' ?>
<!DOCTYPE html>
<html b:css='false' b:js='false' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
    <meta content='width=device-width, initial-scale=1' name='viewport'/>
    <title><data:blog.title/></title>
    <b:skin><![CDATA[
    /* CSS styles */
    :root {
      --primary-color: #1B5E20;
      --secondary-color: #2E7D32;
      --text-color: #333;
      --light-bg: #F5F5F5;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background: var(--light-bg);
    }

    .header {
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      color: white;
      padding: 20px;
    }

    .header-content {
      display: flex;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .header-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 20px;
    }

    .header-text h1 {
      font-size: 32px;
      margin: 0;
    }

    .nav-menu {
      background: rgba(255,255,255,0.95);
      padding: 10px;
      text-align: center;
    }

    .nav-link {
      display: inline-block;
      padding: 10px 20px;
      color: var(--text-color);
      text-decoration: none;
      border-radius: 5px;
      margin: 0 10px;
    }

    .nav-link:hover {
      background: rgba(27,94,32,0.1);
      color: var(--primary-color);
    }

    .content-section {
      max-width: 1200px;
      margin: 40px auto;
      padding: 20px;
    }

    .rules-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .rule-card {
      background: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .rule-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .rule-content {
      padding: 20px;
    }

    .shabdwani-card {
      background: white;
      border-radius: 10px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .about-section {
      background: white;
      border-radius: 10px;
      padding: 30px;
      margin-top: 40px;
    }

    .founder-section {
      display: flex;
      align-items: center;
      margin: 30px 0;
    }

    .founder-image {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-right: 30px;
    }

    .footer {
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      color: white;
      padding: 40px 20px;
      text-align: center;
    }

    .social-links {
      margin: 20px 0;
    }

    .social-button {
      display: inline-block;
      margin: 0 10px;
      color: white;
      font-size: 24px;
    }

    @media (max-width: 768px) {
      .header-content {
        flex-direction: column;
        text-align: center;
      }

      .header-image {
        margin-bottom: 20px;
      }

      .founder-section {
        flex-direction: column;
        text-align: center;
      }

      .founder-image {
        margin: 0 0 20px 0;
      }
    }
    ]]></b:skin>

    <!-- Font Awesome -->
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' rel='stylesheet'/>
</head>
<body>
  <!-- Header -->
  <header class='header'>
    <div class='header-content'>
      <img class='header-image' src='https://api.a0.dev/assets/image?text=Guru%20Jambheshwar%20Bhagwan%20spiritual%20portrait%20with%20peaceful%20aura'/>
      <div class='header-text'>
        <h1>बिश्नोई दर्पण</h1>
        <p>गुरु जम्भेश्वर भगवान की शिक्षाएं</p>
      </div>
    </div>
    <nav class='nav-menu'>
      <a class='nav-link' href='#home'>मुख्य पृष्ठ</a>
      <a class='nav-link' href='#rules'>29 नियम</a>
      <a class='nav-link' href='#shabdwani'>शब्दवाणी</a>
      <a class='nav-link' href='#history'>इतिहास</a>
      <a class='nav-link' href='#about'>About</a>
    </nav>
  </header>

  <!-- Main Content -->
  <main>
    <!-- 29 Rules Section -->
    <section id='rules' class='content-section'>
      <h2>29 नियम</h2>
      <div class='rules-grid'>
        <div class='rule-card'>
          <img class='rule-image' src='https://api.a0.dev/assets/image?text=Bishnoi%20First%20Rule%20Spiritual%20Bath'/>
          <div class='rule-content'>
            <h3>प्रथम नियम</h3>
            <p>तीन दिन तक तीनों संध्या स्नान करना और शुद्ध वस्त्र धारण करना।</p>
          </div>
        </div>
        <!-- More rules can be added here -->
      </div>
    </section>

    <!-- Shabdwani Section -->
    <section id='shabdwani' class='content-section'>
      <h2>शब्दवाणी</h2>
      <div class='shabdwani-card'>
        <h3>शब्द वाणी १</h3>
        <p>जंभ कहै श्री विष्णु जी, सुणौ सिष्य सुजाण।<br/>
           सत्य शब्द सूं भेद है, जीव मुकति परवाण॥</p>
        <p class='explanation'>गुरु जंभेश्वर जी कहते हैं कि हे बुद्धिमान शिष्यों, सुनो! सत्य के शब्दों में ही मुक्ति का भेद छिपा है।</p>
      </div>
    </section>

    <!-- History Section -->
    <section id='history' class='content-section'>
      <h2>बिश्नोई धर्म का इतिहास</h2>
      <img src='https://api.a0.dev/assets/image?text=Bishnoi%20History%20Temple%20Ancient&aspect=16:9' style='width:100%;border-radius:10px;margin-bottom:20px;'/>
      <p>बिश्नोई धर्म की स्थापना गुरु जम्भेश्वर जी महाराज ने 1485 में की थी। यह धर्म प्रकृति संरक्षण और सामाजिक समरसता का संदेश देता है...</p>
    </section>

    <!-- About Section -->
    <section id='about' class='content-section'>
      <div class='about-section'>
        <h2>About Us</h2>
        <p>Welcome to Bishnoi Darpan - A Digital Gateway to Bishnoi Heritage</p>
        
        <div class='founder-section'>
          <img class='founder-image' src='https://api.a0.dev/assets/image?text=Professional%20portrait%20modern%20indian%20man'/>
          <div class='founder-info'>
            <h3>Kuldeep Bishnoi</h3>
            <p class='founder-title'>Founder & Curator</p>
            <p class='founder-quote'>"Preserving our heritage while embracing modernity"</p>
          </div>
        </div>

        <div class='contact-info'>
          <h3>Contact Us</h3>
          <p><i class='fas fa-envelope'></i> contact@bishnoidarpan.com</p>
          <p><i class='fas fa-phone'></i> +91 9876543210</p>
          <p><i class='fas fa-map-marker-alt'></i> Rajasthan, India</p>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class='footer'>
    <div class='social-links'>
      <a href='#' class='social-button'><i class='fab fa-facebook'></i></a>
      <a href='#' class='social-button'><i class='fab fa-instagram'></i></a>
      <a href='#' class='social-button'><i class='fab fa-twitter'></i></a>
    </div>
    <p>© 2024 Bishnoi Darpan. Created by Kuldeep Bishnoi. All rights reserved.</p>
    <div class='footer-links'>
      <a href='#'>Privacy Policy</a> | 
      <a href='#'>Terms of Service</a> | 
      <a href='#'>Contact</a>
    </div>
  </footer>

  <!-- JavaScript -->
  <script>
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  </script>
</body>
</html>