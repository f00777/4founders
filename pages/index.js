// next link
import Link from 'next/link';

// components
import ParticlesContainer from '../components/ParticlesContainer';

// icons
import { RxDesktop, RxPencil2, RxReader, RxMixerHorizontal } from 'react-icons/rx';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full overflow-y-auto'>
      {/* Hero Section */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 relative'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto relative z-10'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Desarrollo de Software y <br />
            Analítica de Datos para <br />
            <span className='text-accent'>Escalar tu Negocio</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-6'
          >
            En 4Founders impulsamos el crecimiento de Startups, PYMES y Empresas mediante desarrollo web, aplicaciones móviles y ciencia de datos. Transformamos procesos manuales en flujos digitales inteligentes con software a medida y diseño UX de alta calidad enfocado en resultados reales
          </motion.p>
          {/* mision */}
          <motion.p
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Aplicamos un enfoque pragmático para resolver la ineficiencia operativa y la falta de digitalización estratégica en empresas chilenas.
          </motion.p>
          {/* btn */}
          <div className='flex flex-col md:flex-row gap-4 justify-center xl:hidden relative z-10'>
            <Link href='/contact' className='btn rounded-full bg-accent text-white font-bold flex justify-center items-center px-6 hover:bg-accent/80 transition-all'>
              Agenda una Consultoría Gratuita
            </Link>
            <Link href='/work' className='btn rounded-full border border-accent text-white flex justify-center items-center px-6 hover:bg-accent/20 transition-all'>
              Ver portafolio
            </Link>
          </div>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex gap-4'
          >
            <Link href='/contact' className='btn rounded-full bg-accent text-white font-bold flex justify-center items-center px-8 hover:bg-accent/80 transition-all'>
              Agenda una Consultoría Gratuita
            </Link>
            <Link href='/work' className='btn rounded-full border border-accent text-white flex justify-center items-center px-8 hover:bg-accent/20 transition-all'>
              Ver portafolio
            </Link>
          </motion.div>
        </div>
        {/* image */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none'>
          {/* bg img */}
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0' style={{ filter: 'hue-rotate(290deg) saturate(60%)' }}></div>
          {/* particles */}
          <ParticlesContainer />
          {/* avatar img */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
          >
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className='w-full bg-primary py-24 px-6'>
        <div className='container mx-auto'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='h2 text-center mb-16'
          >
            Soluciones Tecnológicas Integrales para el <span className='text-accent'>Crecimiento de tu Negocio</span>
          </motion.h2>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
            {/* Pilar 1: Ingeniería de Software y MVPs */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className='bg-[rgba(65,47,123,0.15)] flex flex-col gap-y-4 rounded-lg p-6 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'
            >
              <div className='text-4xl text-accent mb-2'><RxDesktop /></div>
              <h3 className='text-xl font-bold mb-2'>Desarrollo de Software a Medida y MVPs</h3>
              <p className='text-white/60 mb-4 leading-relaxed'>Construimos aplicaciones web y móviles escalables diseñadas para Startups y PYMES que buscan validar su tecnología o postular a fondos como Corfo.</p>
              <ul className='list-disc pl-6 space-y-2 text-sm text-white/50'>
                <li>Desarrollo de Aplicaciones Web y Móviles de alta fidelidad.</li>
                <li>Creación de MVPs para validación técnica rápida.</li>
                <li>Arquitectura de microservicios y refactorización de sistemas.</li>
                <li>Enfoque en Clean Code para evitar la deuda técnica desde el día uno.</li>
              </ul>
            </motion.div>

            {/* Pilar 2: Ciencia de Datos e IA */}
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className='bg-[rgba(65,47,123,0.15)] flex flex-col gap-y-4 rounded-lg p-6 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'
            >
              <div className='text-4xl text-accent mb-2'><RxReader /></div>
              <h3 className='text-xl font-bold mb-2'>Consultoría en Data Science y Machine Learning</h3>
              <p className='text-white/60 mb-4 leading-relaxed'>Transformamos tus datos dispersos en Insights valiosos para la toma de decisiones gerenciales mediante modelos de analítica avanzada.</p>
              <ul className='list-disc pl-6 space-y-2 text-sm text-white/50'>
                <li>Implementación de modelos predictivos de demanda y ventas.</li>
                <li>Dashboards analíticos integrados para visualización en tiempo real.</li>
                <li>Automatización de reportes de sostenibilidad (ESG) y métricas de negocio.</li>
                <li>Ingeniería de datos para limpieza y consolidación de bases de datos.</li>
              </ul>
            </motion.div>

            {/* Pilar 3: Automatización de Procesos */}
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className='bg-[rgba(65,47,123,0.15)] flex flex-col gap-y-4 rounded-lg p-6 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'
            >
              <div className='text-4xl text-accent mb-2'><RxMixerHorizontal /></div>
              <h3 className='text-xl font-bold mb-2'>Automatización e Integración de Sistemas</h3>
              <p className='text-white/60 mb-4 leading-relaxed'>Eliminamos la "fatiga de Excel" conectando tus herramientas actuales (ERP, CRM, Bancos) en un solo flujo de trabajo eficiente.</p>
              <ul className='list-disc pl-6 space-y-2 text-sm text-white/50'>
                <li>Desarrollo de ERPs personalizados enfocados en tu rubro específico.</li>
                <li>Integración de APIs críticas: SII, Webpay, Bancos y sistemas de RRHH.</li>
                <li>Conciliación bancaria automatizada para reducir errores manuales.</li>
                <li>Middleware para hacer que tus softwares "hablen entre sí" sin fricciones.</li>
              </ul>
            </motion.div>

            {/* Pilar 4: Diseño UI/UX */}
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.2 }}
              className='bg-[rgba(65,47,123,0.15)] flex flex-col gap-y-4 rounded-lg p-6 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'
            >
              <div className='text-4xl text-accent mb-2'><RxPencil2 /></div>
              <h3 className='text-xl font-bold mb-2'>Diseño UI/UX con Enfoque en Conversión B2B</h3>
              <p className='text-white/60 mb-4 leading-relaxed'>Creamos interfaces que no solo se ven bien, sino que son fáciles de usar y están optimizadas para aumentar tus ventas y productividad.</p>
              <ul className='list-disc pl-6 space-y-2 text-sm text-white/50'>
                <li>Diseño de interfaces para software industrial y plataformas complejas.</li>
                <li>Auditoría UX para identificar fugas de clientes en el embudo de ventas.</li>
                <li>Rediseño de sistemas legados para mejorar la adopción de los usuarios.</li>
                <li>Prototipado rápido centrado en el usuario final y los objetivos de negocio.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <section id="partners" className='w-full bg-primary/80 py-16 px-6'>
        <div className='container mx-auto'>
          <motion.h3
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='text-center text-white/60 text-lg mb-12'
          >
            Empresas y organizaciones que confían en nosotros
          </motion.h3>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center'
          >
            <div className='w-32 h-20 bg-white/10 rounded-lg flex items-center justify-center'>
              <span className='text-white/30 text-xs text-center'>Logo Turismo Zahr</span>
            </div>
            <div className='w-32 h-20 bg-white/10 rounded-lg flex items-center justify-center'>
              <span className='text-white/30 text-xs text-center'>Logo LabEIT UDP</span>
            </div>
            <div className='w-32 h-20 bg-white/10 rounded-lg flex items-center justify-center'>
              <span className='text-white/30 text-xs text-center'>Logo Trama Arquitectos</span>
            </div>
            <div className='w-32 h-20 bg-white/10 rounded-lg flex items-center justify-center'>
              <span className='text-white/30 text-xs text-center'>Logo TrendyVision</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className='w-full bg-primary py-24 px-6'>
        <div className='container mx-auto'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='h2 text-center mb-16'
          >
            Impacto Real: <span className='text-accent'>Casos de Éxito</span> en Software y Datos
          </motion.h2>

          {/* Case A: VioERP */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='flex flex-col lg:flex-row gap-8 mb-16 items-center'
          >
            <div className='w-full lg:w-1/2 h-64 bg-white/5 rounded-xl flex items-center justify-center'>
              <span className='text-white/30'>Interfaz de VioERP</span>
            </div>
            <div className='w-full lg:w-1/2'>
              <h3 className='text-2xl font-bold mb-4'>VioERP: Optimización Operativa y Reducción de Costos</h3>
              <p className='text-white/60 mb-6 leading-relaxed'>Sustituimos un ERP genérico y costoso por una solución 100% personalizada que se adapta al flujo real del negocio mayorista.</p>
              <ul className='list-disc pl-6 space-y-2 text-white/50'>
                <li>Reducción del 80% en costos de suscripción mensual (de $100.000 a $20.000).</li>
                <li>Control de inventario y registro de ventas en tiempo real.</li>
                <li>Interfaz simplificada que elimina funciones innecesarias y optimiza la curva de aprendizaje.</li>
              </ul>
            </div>
          </motion.div>

          {/* Case B: Turismo Zahr */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='flex flex-col lg:flex-row-reverse gap-8 mb-16 items-center'
          >
            <div className='w-full lg:w-1/2 h-64 bg-white/5 rounded-xl flex items-center justify-center'>
              <span className='text-white/30'>Dashboard de Analítica</span>
            </div>
            <div className='w-full lg:w-1/2'>
              <h3 className='text-2xl font-bold mb-4'>Turismo Zahr: Ingeniería de Datos para la Toma de Decisiones</h3>
              <p className='text-white/60 mb-6 leading-relaxed'>Implementamos un ecosistema de datos para centralizar información dispersa y entregar visibilidad financiera total a la gerencia.</p>
              <ul className='list-disc pl-6 space-y-2 text-white/50'>
                <li>Cálculo automatizado de rentabilidad real por unidad de negocio.</li>
                <li>Monitoreo de performance de ventas y departamentos en tiempo real.</li>
                <li>Detección proactiva de atrasos en pagos y brechas operativas.</li>
              </ul>
            </div>
          </motion.div>

          {/* Case C: LabEIT UDP */}
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='flex flex-col lg:flex-row gap-8 items-center'
          >
            <div className='w-full lg:w-1/2 h-64 bg-white/5 rounded-xl flex items-center justify-center'>
              <span className='text-white/30'>Sitio Web LabEIT</span>
            </div>
            <div className='w-full lg:w-1/2'>
              <h3 className='text-2xl font-bold mb-4'>Modernización Digital para la Facultad de Ingeniería</h3>
              <p className='text-white/60 mb-6 leading-relaxed'>Reconstrucción integral de la plataforma del laboratorio con un stack tecnológico moderno y diseño prolijo.</p>
              <ul className='list-disc pl-6 space-y-2 text-white/50'>
                <li>Implementación de funciones de alto valor para estudiantes y administradores.</li>
                <li>Diseño UI/UX optimizado para la experiencia académica.</li>
                <li>Arquitectura robusta que facilita el mantenimiento y la escalabilidad.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Rescue CTA Section */}
      <section className='w-full bg-gradient-to-r from-accent/20 via-primary to-accent/20 py-20 px-6'>
        <div className='container mx-auto text-center'>
          <motion.h3
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='text-2xl md:text-3xl font-bold mb-6'
          >
            ¿Tienes un proyecto de software estancado o fallido?
          </motion.h3>
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
            className='text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed'
          >
            Muchos clientes llegan a nosotros tras malas experiencias con desarrollos de baja calidad. Nos especializamos en el rescate, auditoría y refactorización de aplicaciones críticas para que finalmente entreguen el valor que tu empresa necesita.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.2 }}
          >
            <Link href='/contact' className='btn rounded-full bg-accent text-white font-bold px-10 py-4 hover:bg-accent/80 transition-all text-lg'>
              Agenda una evaluación técnica gratuita
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
