import styles from "./styles/Section.module.css";
export function Section() {
  return (
    <div>
      <div className={styles.mb_50}>
        <h1 className={styles.title}>
          Te contamos cómo va la gestión pública
        </h1>
        <div className={styles.description}>
          <p>
            Esta sección está dedicada a la transparencia en la ejecución del
            presupuesto de la Alcaldía de Cúcuta. Aquí encontrarás noticias de
            la administración distrital, seguimiento de obras, rendición de
            cuentas, avances del plan de desarrollo y toda la información
            relacionada con la gestión pública en Cúcuta.
          </p>
        </div>
      </div>
      <div className={styles.article}>
        <a target="_blank" rel="noreferrer"
          className={styles.article__a}
          href="https://datastudio.google.com/u/0/reporting/ed54dbc2-1f48-4b00-8ce4-742c3282d534/page/Zc7SB"
        >
          <img
            className={styles.article__a__img}
            src="http://www.cucuta-nortedesantander.gov.co/sites/cucutanortedesantander/content/files/000859/42939_42939_1280x320.png?c=5866"
            alt=""
          />
        </a>
        <div className={styles.article__content}>
          <div className={styles.article__content__text}>
            <p className={styles.article__content__text__p}>
              La emergencia por la pandemia de Covid-19 ha puesto en evidencia
              la necesidad de implementar un Nuevo Contrato Social para Bogotá.
              Esta nueva perspectiva nos exige orientar nuestros esfuerzos para
              ayudar a los más vulnerables y a generar un ingreso mínimo vital
              para los hogares más pobres o en riesgo de caer en pobreza.
            </p>
          </div>
          <div className={styles.article__content__url}>
            <div>
              <div className={styles.article__content__url__border}>
                <div className={styles.article__content__url__btn}>
                  <a target="_blank" rel="noreferrer" href="https://datastudio.google.com/u/0/reporting/ed54dbc2-1f48-4b00-8ce4-742c3282d534/page/Zc7SB">
                    Conoce las cifras
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
