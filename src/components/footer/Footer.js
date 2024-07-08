import "./Footer.css";
import Button from '../button/Button';

function Footer() {
  return (
    <footer>
      <div>
             <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <h1>Ready to start a career in <span class="highlight-tech">tech?</span></h1>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <h3>Choose a bootcamp, join 7000+ women building their career.</h3>
              </div>
              <div style={{ marginbottom: '20px', textAlign: 'center' }}></div>   
          <div   style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Button onClick="https://bootcamps.niyo.co/bootcamps"
                text="View Bootcamps"
                buttonBackground="rgb(251, 175, 0)"
                buttonColor="#fff"
              />
          </div>
      </div>
      </footer>
  );
}

export default Footer;