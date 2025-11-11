import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

const CalculatorSection = () => {
  const [calculatorData, setCalculatorData] = useState({
    type: '',
    area: '',
    service: ''
  });

  const calculatePrice = () => {
    const { type, area, service } = calculatorData;
    
    if (!type || !area || !service) {
      toast({
        title: 'Заполните все поля',
        description: 'Для расчёта стоимости необходимо выбрать все параметры',
        variant: 'destructive'
      });
      return;
    }

    const prices: { [key: string]: number } = {
      'design': 3500,
      'cosmetic': 5500,
      'capital': 9000
    };

    const areaNum = parseFloat(area);
    const basePrice = prices[service] * areaNum;
    
    const coefficient = type === 'commercial' ? 1.3 : 1;
    const totalPrice = basePrice * coefficient;

    toast({
      title: 'Расчёт готов!',
      description: `Ориентировочная стоимость: ${totalPrice.toLocaleString('ru-RU')} ₽`,
      duration: 5000
    });
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Калькулятор стоимости</h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-base sm:text-lg">
          Узнайте ориентировочную стоимость вашего проекта
        </p>
        
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="type">Тип объекта</Label>
                <Select value={calculatorData.type} onValueChange={(value) => setCalculatorData({...calculatorData, type: value})}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Выберите тип объекта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Жилое помещение</SelectItem>
                    <SelectItem value="commercial">Коммерческое помещение</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="area">Площадь (м²)</Label>
                <Input 
                  id="area"
                  type="number" 
                  placeholder="Введите площадь"
                  value={calculatorData.area}
                  onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="service">Вид услуги</Label>
                <Select value={calculatorData.service} onValueChange={(value) => setCalculatorData({...calculatorData, service: value})}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Дизайн интерьера (3 500 ₽/м²)</SelectItem>
                    <SelectItem value="cosmetic">Косметический ремонт (5 500 ₽/м²)</SelectItem>
                    <SelectItem value="capital">Капитальный ремонт (9 000 ₽/м²)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full" size="lg" onClick={calculatePrice}>
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CalculatorSection;
