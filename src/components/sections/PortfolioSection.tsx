import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  category: string;
  style: string;
  city: string;
  area: number;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Квартира в современном стиле',
    category: 'apartment',
    style: 'modern',
    city: 'Краснодар',
    area: 85,
    image: 'https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/9121fdcb-3038-48ea-8902-20203ef82be1.jpg',
    description: 'Светлая просторная квартира с минималистичным дизайном'
  },
  {
    id: 2,
    title: 'Кухня премиум-класса',
    category: 'house',
    style: 'modern',
    city: 'Сочи',
    area: 25,
    image: 'https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/d82434f0-e45a-44d0-9b7e-a04d84f6e510.jpg',
    description: 'Кухня с дорогими материалами и современной техникой'
  },
  {
    id: 3,
    title: 'Спальня в скандинавском стиле',
    category: 'apartment',
    style: 'scandinavian',
    city: 'Геленджик',
    area: 20,
    image: 'https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/74cfeab4-fd3b-4185-8c01-14a5633ff0b0.jpg',
    description: 'Уютная спальня в светлых тонах с натуральными материалами'
  },
  {
    id: 4,
    title: 'Офис современной компании',
    category: 'commercial',
    style: 'modern',
    city: 'Краснодар',
    area: 120,
    image: 'https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/5a6777f8-536b-43f3-a4a7-a8b157182bb7.jpg',
    description: 'Стильный офис с открытой планировкой и современным дизайном'
  },
  {
    id: 5,
    title: 'Ресторан премиум-класса',
    category: 'commercial',
    style: 'modern',
    city: 'Сочи',
    area: 200,
    image: 'https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/7357f87b-a2d5-4d17-af91-2b6d87929f17.jpg',
    description: 'Элегантный ресторан с авторским интерьером и панорамными окнами'
  },
  {
    id: 6,
    title: 'Салон красоты',
    category: 'commercial',
    style: 'modern',
    city: 'Геленджик',
    area: 80,
    image: 'https://cdn.poehali.dev/projects/249bcc05-b9e1-4424-ad17-f8228415d084/files/a4e87738-1978-467a-91a8-6c9f0a132154.jpg',
    description: 'Современный салон с комфортными зонами и элегантной отделкой'
  }
];

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Портфолио</h2>
        <p className="text-center text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg">
          Реализованные проекты наших клиентов
        </p>
        
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            Все проекты
          </Button>
          <Button 
            variant={filter === 'apartment' ? 'default' : 'outline'}
            onClick={() => setFilter('apartment')}
          >
            Квартиры
          </Button>
          <Button 
            variant={filter === 'house' ? 'default' : 'outline'}
            onClick={() => setFilter('house')}
          >
            Дома
          </Button>
          <Button 
            variant={filter === 'commercial' ? 'default' : 'outline'}
            onClick={() => setFilter('commercial')}
          >
            Коммерческие объекты
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <Card 
                  className="cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="MapPin" size={16} />
                      <span>{project.city}</span>
                      <span>•</span>
                      <span>{project.area} м²</span>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MapPin" size={18} />
                      <span>{project.city}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Maximize" size={18} />
                      <span>Площадь: {project.area} м²</span>
                    </div>
                    <p className="text-lg">{project.description}</p>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => window.location.href = 'tel:+79898089393'}
                    >
                      <Icon name="Phone" size={18} className="mr-2" />
                      Заказать похожий проект
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
