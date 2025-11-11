import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/files/4a1c7245-dc32-4192-a9bc-1656b648a555.jpeg" 
            alt="Атмосфера - студия дизайна и ремонта"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <div className="text-lg sm:text-xl font-bold leading-tight" style={{color: '#9B7E4F'}}>Атмосфера</div>
            <div className="text-xs" style={{color: '#9B7E4F', opacity: 0.7}}>Студия дизайна и ремонта</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="text-foreground hover:text-primary transition">Услуги</a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition">Портфолио</a>
          <a href="#calculator" className="text-foreground hover:text-primary transition">Цены</a>
          <a href="#contact" className="text-foreground hover:text-primary transition">Контакты</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button 
            className="hidden md:inline-flex" 
            style={{backgroundColor: '#9B7E4F', color: 'white'}} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8A6F42'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9B7E4F'}
            onClick={() => window.location.href = 'tel:+79898089393'}
          >
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#services" className="text-foreground hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Портфолио</a>
            <a href="#calculator" className="text-foreground hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Цены</a>
            <a href="#contact" className="text-foreground hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Контакты</a>
            <Button 
              className="w-full" 
              style={{backgroundColor: '#9B7E4F', color: 'white'}}
              onClick={() => window.location.href = 'tel:+79898089393'}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
