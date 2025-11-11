import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import PortfolioSection from '@/components/sections/PortfolioSection';
import CalculatorSection from '@/components/sections/CalculatorSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  const advantages = [
    {
      icon: 'MapPin',
      title: 'Работаем по всему Краснодарскому краю',
      description: 'Геленджик, Сочи, Краснодар, Анапа, Новороссийск'
    },
    {
      icon: 'Palette',
      title: 'Авторский дизайн и ремонт «под ключ»',
      description: 'Индивидуальный подход к каждому проекту'
    },
    {
      icon: 'Shield',
      title: 'Гарантия на все виды работ',
      description: 'Официальный договор и прозрачные условия'
    },
    {
      icon: 'DollarSign',
      title: 'Фиксированная стоимость',
      description: 'Без скрытых платежей и доплат'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/9121fdcb-3038-48ea-8902-20203ef82be1.jpg')`,
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Дизайн и ремонт<br />в Краснодаре и по краю
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200">
            Авторские проекты и качественный ремонт «под ключ»
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 w-full sm:w-auto">
              <Icon name="Palette" size={20} className="mr-2" />
              <span className="text-sm sm:text-base">Заказать дизайн-проект</span>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto">
              <Icon name="Calculator" size={20} className="mr-2" />
              <span className="text-sm sm:text-base">Рассчитать стоимость</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">О студии «Атмосфера»</h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg max-w-3xl mx-auto">
            Посмотрите видео о нашей студии, процессе работы и реализованных проектах
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl bg-muted">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Презентация студии Атмосфера"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-sm sm:text-base text-muted-foreground">Реализованных проектов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">20 лет</div>
                <p className="text-sm sm:text-base text-muted-foreground">На рынке дизайна и ремонта</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm sm:text-base text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-scale-in">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg">
            Полный спектр работ от дизайна до финальной отделки
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Palette" size={28} className="text-primary" />
                  <h3 className="text-2xl font-bold">Дизайн интерьера</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Разработка концепции и 3D-визуализация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Рабочая документация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Авторский надзор</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Badge variant="secondary" className="text-lg py-1 px-3">от 3 500 ₽/м²</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="Wrench" size={28} className="text-primary" />
                  <h3 className="text-2xl font-bold">Ремонтные работы</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Капитальный и косметический ремонт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Электромонтаж и сантехника</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Полный цикл «под ключ»</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Badge variant="secondary" className="text-lg py-1 px-3">от 5 500 ₽/м²</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">
              Профессиональный ремонт квартир, домов и коммерческой недвижимости в Краснодаре
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Быстро, качественно, с гарантией до 3 лет
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Вы ищете надёжную компанию по <strong>ремонту квартир в Краснодаре</strong>? Хотите сделать косметический, капитальный или евроремонт без стресса и задержек? Мы — команда опытных мастеров, которая уже более 20 лет помогает жителям Краснодарского края превращать жильё в уютное и стильное пространство.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Home" className="text-primary" size={24} />
                      Ремонт квартир и домов
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Косметический ремонт — от 3 500 ₽/м²</li>
                      <li>• Капитальный ремонт — от 6 500 ₽/м²</li>
                      <li>• Евроремонт — от 9 000 ₽/м²</li>
                      <li>• Отделка новостроек</li>
                      <li>• Перепланировка помещений</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Building" className="text-primary" size={24} />
                      Коммерческая недвижимость
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Офисы и бизнес-центры</li>
                      <li>• Магазины и торговые центры</li>
                      <li>• Рестораны и кафе</li>
                      <li>• Салоны красоты и клиники</li>
                      <li>• Индивидуальный расчёт</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-12">Почему выбирают нас?</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex gap-3">
                  <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Индивидуальный подход</strong> — каждый проект разрабатываем с учётом ваших пожеланий, бюджета и стиля интерьера
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Фиксированная цена</strong> — никаких скрытых платежей, стоимость озвучивается заранее и не меняется
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Работаем по договору</strong> — ваша безопасность и прозрачность процесса гарантированы
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <strong>Гарантия до 3 лет</strong> — мы уверены в качестве своей работы
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-12">Виды ремонта, которые мы выполняем</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Косметический ремонт</h4>
                  <p className="text-muted-foreground">Идеален для сдачи в аренду или свежего вида без масштабных изменений. Включает поклейку обоев, покраску, замену напольных покрытий.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Капитальный ремонт</h4>
                  <p className="text-muted-foreground">Полная замена инженерных систем, выравнивание стен, новая электрика и сантехника. Ремонт «под ключ» за 30–60 дней.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Евроремонт</h4>
                  <p className="text-muted-foreground">Элитный уровень с дизайнерским контролем, дорогими материалами и точностью до миллиметра.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Ремонт домов и коттеджей</h4>
                  <p className="text-muted-foreground">Сложные объёмы, утепление, кровля, инженерные сети, фасадные работы.</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-12">Работаем по всем районам Краснодара</h3>
              <p className="text-muted-foreground mb-6">
                Центр, Западный, Прикубанский, Карасунский, Юбилейный, Северный, Пашковский, 40 лет Победы и другие районы. 
                Также выезжаем в Сочи, Геленджик, Анапу, Новороссийск и другие города Краснодарского края.
              </p>

              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg mt-8">
                <p className="text-lg font-semibold mb-2">Готовы начать ремонт?</p>
                <p className="text-muted-foreground mb-4">
                  Позвоните нам или оставьте заявку — и уже завтра ваша квартира начнёт меняться. 
                  Бесплатная консультация и выезд замерщика!
                </p>
                <Button 
                  size="lg" 
                  className="mt-2"
                  onClick={() => window.location.href = 'tel:+79898089393'}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Наша команда</h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg">
            Профессионалы с многолетним опытом работы
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/45ebce85-1e76-408c-8958-4033f3712845.jpg" 
                    alt="Плуман Алена Викторовна"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">Плуман Алена Викторовна</h3>
                <p className="text-muted-foreground">Генеральный директор</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/aa744b1c-bbd9-479a-acac-c0fdb54d71f1.jpg" 
                    alt="Новиков Роман Аркадьевич"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">Новиков Роман Аркадьевич</h3>
                <p className="text-muted-foreground">Директор по производству</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/7eaa5f98-3194-4014-b31e-94c0efde3717.jpg" 
                    alt="Плуман Александр Евгеньевич"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">Плуман Александр Евгеньевич</h3>
                <p className="text-muted-foreground">Зам. генерального директора</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/71a71653-edd4-41b6-b16e-0736a2d06737.jpg" 
                    alt="Иванов Иван Иванович"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">Иванов Иван Иванович</h3>
                <p className="text-muted-foreground">Прораб</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <CalculatorSection />

      <ContactSection />

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Наши офисы</h2>
          <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg">
            Приходите к нам на консультацию в удобное для вас время
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 bg-muted/30">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Краснодар</h3>
                      <p className="text-muted-foreground">ул. Маяковского, 160, офис 5</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>Пн–Сб 9:00–19:00</span>
                  </div>
                </div>
                <div className="aspect-[16/10] w-full">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=39.011506%2C45.023495&z=17&pt=39.011506,45.023495,pm2rdm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    style={{position: 'relative'}}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 bg-muted/30">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Геленджик</h3>
                      <p className="text-muted-foreground">ул. Рыбникова, 5, офис 2</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>Пн–Сб 9:00–19:00</span>
                  </div>
                </div>
                <div className="aspect-[16/10] w-full">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=38.071284%2C44.548192&z=17&pt=38.071284,44.548192,pm2rdm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    style={{position: 'relative'}}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={28} style={{color: '#9B7E4F'}} />
                <span className="text-2xl font-bold" style={{color: '#9B7E4F'}}>Атмосфера</span>
              </div>
              <p className="text-background/80 mb-6">
                Студия дизайна и ремонта Краснодар
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF0000] hover:bg-[#CC0000] rounded-full flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Icon name="Youtube" size={20} className="text-white" />
                </a>
                <a 
                  href="https://vk.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0077FF] hover:bg-[#0066DD] rounded-full flex items-center justify-center transition-colors"
                  aria-label="ВКонтакте"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.58 14.66h-1.4c-.61 0-.8-.49-1.89-1.59-.95-.93-1.37-1.06-1.61-1.06-.33 0-.42.09-.42.53v1.45c0 .39-.13.63-1.14.63-1.68 0-3.55-.99-4.86-2.84-1.97-2.8-2.51-4.91-2.51-5.34 0-.24.09-.46.53-.46h1.4c.39 0 .54.18.69.6.76 2.2 2.04 4.13 2.56 4.13.2 0 .29-.09.29-.59v-2.29c-.06-.98-.58-1.06-.58-1.41 0-.19.16-.39.42-.39h2.2c.33 0 .45.18.45.57v3.08c0 .33.15.45.24.45.2 0 .36-.12.73-.49 1.14-1.27 1.96-3.24 1.96-3.24.11-.23.28-.46.72-.46h1.4c.47 0 .57.24.47.57-.16.81-1.93 3.65-1.93 3.65-.16.27-.22.39 0 .69.16.23.69.68 1.05 1.08.65.75 1.15 1.38 1.28 1.81.14.43-.07.65-.5.65z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/79898089393" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#25D366] hover:bg-[#1EBE57] rounded-full flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </a>
                <a 
                  href="https://t.me/atmosfera_design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0088CC] hover:bg-[#0077BB] rounded-full flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <Icon name="Send" size={20} className="text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-3 text-background/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (989) 808-93-93</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>atmosfera_krd@bk.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={18} />
                  <span>Пн–Сб 9:00–19:00</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Наши офисы</h3>
              <div className="space-y-4 text-background/80">
                <div>
                  <div className="flex items-start gap-2 mb-1">
                    <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-background">Краснодар</p>
                      <p className="text-sm">ул. Маяковского, 160, офис 5</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-2">
                    <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-background">Геленджик</p>
                      <p className="text-sm">ул. Рыбникова, 5, офис 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2025 Студия «Атмосфера». Все права защищены.</p>
          </div>
        </div>
      </footer>

      <a
        href="tel:+79898089393"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 transition-transform hover:scale-110 active:scale-95 md:hidden"
        style={{backgroundColor: '#9B7E4F'}}
        aria-label="Позвонить"
      >
        <Icon name="Phone" size={28} className="text-white" />
      </a>
    </div>
  );
};

export default Index;