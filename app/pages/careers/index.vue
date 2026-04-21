<template>
        <section class="product-detail-section">
  <div class="container-fluid">
      <div class="row">
        <!-- Left Sidebar Navigation -->
        <div class="col-md-3 col-lg-3 sidebar-section d-none d-md-block">
          <AboutSidebar />
        </div>
        <div class="col-md-9 col-lg-9">
<div class="careers-content">

  <!-- TOP TABS -->
  <div class="tabs">
    <button 
    :class="{ active: activeTab === 'overview' }"
    @click="activeTab = 'overview'"
  >
    Overview
  </button>

  <button 
    :class="{ active: activeTab === 'culture' }"
    @click="activeTab = 'culture'"
  >
    Culture at VCN
    </button>
  </div>

<div v-if="activeTab === 'overview'">
  <!-- HERO IMAGE -->
  <section class="hero-sections">
    <img src="" class="hero-img">

    <div class="hero-card">
      <h2>Be a part of the VCN Family</h2>

      <p>
        At Vcare Network, our people drive our success. We welcome passionate, dedicated individuals who want to grow and make an impact in the wellness industry.
      </p>
      <p>
        Being part of VCN means working in a supportive, dynamic environment where your ideas matter and your growth is encouraged. Whether you’re starting out or aiming higher, we offer opportunities to learn, lead, and succeed.
      </p>
      <p>
        Join us and be part of a team committed to innovation, excellence, and empowering lives every day.
      </p>

      <button class="primary-btn">
        FIND OPEN POSITIONS
      </button>
    </div>
  </section>


  <!-- CULTURE SECTION -->
  <section class="culture-section">

    <h2>#IVCN</h2>

    <div class="culture-card">

      <img src="">

      <div>
        <h3>Celebrating Milestones Together</h3>

        <p>
          At VCN India, we believe in nurturing talent and
          celebrating growth while building a strong culture
          of collaboration and achievement.
        </p>
      </div>

    </div>

  </section>


  <!-- VP MESSAGE -->
  <section class="vp-section">

    <h2>Words from our Vice President (HR)</h2>

    <div class="vp-card">

      <div class="vp-profile">

        <img src="">

        <h4>Ritika Malik</h4>

        <span>Vice President - Human Resources</span>

      </div>


      <div class="vp-message">

        <p>
          At VCN, we believe in the power of people. Our vision
          of helping people live better lives starts with our team.
          We nurture passion, encourage innovation and provide
          opportunities for employees to grow and succeed.
        </p>

        <p>
          Being a part of VCN means working with talented people
          from across the globe while making a meaningful impact
          in communities and markets.
        </p>

      </div>

    </div>

  </section>


 
</div>
<!-- CULTURE TAB -->
<div v-if="activeTab === 'culture'">

 <!-- RELATED ARTICLES -->
  <section class="articles">

    <h2>Related Articles</h2>

    <div class="article-card">

      <div class="article-icon">
        A
      </div>

      <div>
        <span>October 3, 2021</span>
        <h4>Team building and collaboration in the corporate world</h4>
      </div>

    </div>

  </section>

</div>

</div>
        </div>




        </div>
        </div>
        </section>

</template>
    <script setup>
    import { ref } from "vue"

const activeTab = ref("overview")
useHead({
  bodyAttrs: {
    class: "product-details-page",
  },
});
</script>
<style scoped>

.careers-content{
padding:30px;
background:#f7f7f7;
}

/* TABS */

.tabs{
display:flex;
gap:30px;
border-bottom:1px solid #ddd;
margin-bottom:25px;
}

.tabs button{
background:none;
border:none;
padding-bottom:8px;
cursor:pointer;
font-size:16px;
}

.tabs .active{
border-bottom:3px solid #e30613;
font-weight:600;
}


/* HERO */

.hero-sections{
background:white;
border-radius:10px;
overflow:hidden;
box-shadow:0 6px 18px rgba(0,0,0,0.08);
margin-bottom:40px;
}

.hero-img{
width:100%;
display:block;
}

.hero-card{
background:#f4eac6;
padding:30px;
text-align:center;
}

.hero-card h2{
font-size:26px;
margin-bottom:10px;
}

.hero-card p{
color:#555;
margin-bottom:20px;
}

.primary-btn{
background:#e5c87b;
border:none;
padding:12px 24px;
border-radius:30px;
cursor:pointer;
font-weight:600;
}


/* CULTURE */

.culture-section{
margin-bottom:40px;
}

.culture-card{
display:flex;
gap:25px;
background:#eaf3e5;
padding:25px;
border-radius:10px;
align-items:center;
}

.culture-card img{
width:260px;
border-radius:8px;
}


/* VP */

.vp-section{
margin-bottom:40px;
}

.vp-card{
display:flex;
gap:30px;
background:#fff;
padding:30px;
border-radius:10px;
box-shadow:0 6px 18px rgba(0,0,0,0.06);
}

.vp-profile{
text-align:center;
width:220px;
}

.vp-profile img{
width:90px;
border-radius:50%;
margin-bottom:10px;
}

.vp-message{
flex:1;
color:#555;
line-height:1.7;
}


/* ARTICLES */

.article-card{
display:flex;
gap:20px;
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 4px 14px rgba(0,0,0,0.05);
align-items:center;
}

.article-icon{
width:60px;
height:60px;
background:#000;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
font-size:24px;
}

@media(max-width:768px){

.culture-card{
flex-direction:column;
}

.vp-card{
flex-direction:column;
}

}

</style>