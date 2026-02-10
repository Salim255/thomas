import image from '/img/image00018.jpg'

const Remerciements = () => {
  return (
    <div className='remer'>
        <figure className='remer__gridImg'>
            <img src={image} alt=''  className='remer__img'/>
        </figure>
        <div className='remer__gridP'>
          <div>
            <p  className='remer__text'>
              <br/>
                Je tiens à remercier l’équipe du pôle image qui a su me motiver tout au long de cette année particulière et difficile pour moi.
                Ils m’ont aidé à redécouvrir la passion de la photographie.<br/><br/>

                Et plus particulièrement Jessica pour nos nombreuses sorties photo et le partage de sa passion.<br/><br/>

                Mais aussi des équipes de la Voix Du Nord et de l’AFP,
                 avec qui j’ai été formé depuis mes débuts dans le monde professionnel et avec qui j’ai vécu des moments forts.<br/><br/>

                Et, évidemment, mes parents, mon frère et Magali pour leur soutien inconditionnel.<br/><br/>
            </p>
            <div className='createdBy'>
               <div className='createdBy__p'>
                  <h5>CREATED BY</h5>
                  <p>  Thomas Lo Presti</p>
               </div>
               <div className='createdBy__btn'>
                 
               </div>
               <br/><br/>
            </div>
          </div>
          
      
        </div>
     
    </div>
  )
}

export default Remerciements