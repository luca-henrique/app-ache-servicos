import React, {useState} from 'react';

import Swiper from 'react-native-swiper';

import {DotSwiper} from '../../components';
import {useNavigate} from '../../hook/useNavigation';
import {IMAGES} from '../../assets/images';
import {LayoutStep} from '../../components/layout/LayoutStep/LayoutStep';
import {FooterLayoutIntro} from '../../components/molecules/FooterLayoutIntro/FooterLayoutIntro';
import {HeaderLayoutIntro} from '../../components/molecules/HeaderLayoutIntro/HeaderLayoutIntro';
import {IconComponent} from '../../components/atoms/Icon/Icon';

export const IntroScreen = () => {
  const {handleNavigation} = useNavigate();

  const [swiperIndex, setSwiperIndex] = useState(0);

  const handleSkipIntro = () => {
    handleNavigation('SelectUserTypeScreen');
  };

  const handleNextStep = (step: number) => {
    if (step === swiperIndex) {
      handleSkipIntro();
    }
    setSwiperIndex(step);
  };

  return (
    <Swiper
      showsButtons={false}
      loop={false}
      index={swiperIndex}
      onIndexChanged={index => setSwiperIndex(index)}
      dot={<DotSwiper />}
      activeDot={<DotSwiper isActive />}>
      <LayoutStep source={IMAGES.introStep01}>
        <HeaderLayoutIntro handleSkip={handleSkipIntro} nextText="Pular" />
        <FooterLayoutIntro
          handleNext={() => handleNextStep(1)}
          title={
            'Encontre profissionais confiáveis para todos os tipo de serviço'
          }
          description={
            'Navegue pelas categorias e encontre o profissional certo, pronto para te atender'
          }
        />
      </LayoutStep>
      <LayoutStep source={IMAGES.introStep02}>
        <HeaderLayoutIntro
          handleBack={() => handleNextStep(0)}
          handleSkip={handleSkipIntro}
          nextText="Pular"
        />

        <FooterLayoutIntro
          handleNext={() => handleNextStep(1)}
          title={
            'Mostre seus serviços, conquiste novos clientes e expanda sua presença local'
          }
          description={
            'Fortaleça sua presença online permitindo que os clientes descubram o seu trabalho'
          }
        />
      </LayoutStep>
    </Swiper>
  );
};
