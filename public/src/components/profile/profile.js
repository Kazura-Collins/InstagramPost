class MyProfile extends HTMLElement {
  //Metodo para declarar que atributos/parametros
  //vamos a utilizar en nuestra clase
  static get observedAttributes() {
    return ['name', 'lastname', 'age'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  //Se ejecuta cuando la clase está
  //montado en nuestra pagina/html
  connectedCallback() {
    this.render();
  }

  //Metodo que se encarga de ejecutarse
  //si algun valor cambia
  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/profile/style.css">
        <section>
        <div class="card">
        <div class="top">
            <div class="userDetails">
                <div class="profile_img">
                    <img src="./images/nagitoperezosochikitito.jpg" class="cover" alt="Kazura profile pic">                    
                </div>
                <h3>kazuracollins<br><span>Cali, Colombia</span></h3>
            </div>
            <div>
                <img src="./images/dot.png" class="dot" alt="">
            </div>
        </div>
        <div class="imgBx">
            <img src="./images/kazupost.png" class="cover" alt="post foto Kazura">
        </div>
        <div class="actionBtns">
            <div class="left">
                <img src="./images/heart.png" class="heart" onclick="likeButton()">
                <img src="./images/comment.png" alt="">
                <img src="./images/share.png" alt="">
            </div>
            <div class="right">
                <img src="./images/bookmark.png" alt="">
            </div>
        </div>
        <h4 class="likes">666 likes</h4>
        <h4 class="message"><b>kazuracollins</b> i hate programming <span>#css</span> <span>#html</span> <span>#javascript</span></h4>
        <h4 class="comments">View all 88k comments</h4>
    </div>
    
        </section>
        `;
  }
}

customElements.define('my-profile', MyProfile);
export default MyProfile;
