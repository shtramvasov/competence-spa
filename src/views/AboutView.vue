<template >
  <section>
    <Header :background="'white'" />
    <HeroSection 
      :title="'Кто мы'"
      :desc="`Competence это международная IT команда, базирующаяся в нескольких локациях по всему миру. 
              Наш ключевой продукт называется Competence digital signage сервис. Это отмеченное наградами 
              простое и надежное программное решение для удаленного управления документами вашей организации 
              различного масштаба и назначения, к примеру, рекламные мониторы в супермаркетах или цифровые 
              меню в ресторанах быстрого питания. Оно позволяет транслировать  медиа, будь то аудио, видео, 
              динамические потоки или интерактивные сценарии в неограниченном кол-ве локаций в любое время и из любого места.`"
      :img="'hero-about'"
    >
    <BlockStats />
    </HeroSection>
  </section>
</template>
<script>
import HeroSection from '@/components/HeroSection/HeroSection';
import Header from '@/components/Header/Header';
import BlockStats from '../components/BlockStats/BlockStats';
export default {
    components: { HeroSection, Header, BlockStats }
}
</script>
<style lang="scss" scoped>
  
</style>