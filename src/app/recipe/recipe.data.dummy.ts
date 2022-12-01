import {Recipe} from './recipe.model';
import {Observable} from 'rxjs';
import {of} from '@reactivex/rxjs/dist/package';

const RECIPE_MAP_DATA: Map<number, Recipe> = new Map();
const RECIPE_OBJ_DATA: {[key: number]: Recipe} = {};

RECIPE_MAP_DATA.set(0, {
  description: 'Sallata Çezar është një sallatë shumë e famshme e krijuar nga shefi italian emigruar në Shtetet e ' +
    'Bashkuara të Amerikës Cesare Cardini. Për këtë arsye këtu bashkohen shumë mirë shija italiane (djathi Parmigiano) ' +
    'dhe shija amerikane (salca Worcestershire).',
  imagePath: 'https://unegatuaj.com/wp-content/uploads/2021/02/Sallate-cezar-1300x939.jpeg',
  ingredients: [
    {
      amount: 1,
      name: 'Tufe sallate jeshile'
    },
    {
      amount: 1,
      name: 'Fileto pule'
    },
    {
      amount: 2,
      name: 'Feta buke'
    }
  ],
  name: 'ZZZZZZZZ'
});

RECIPE_MAP_DATA.set(1, {
  description: 'Kjo recetë është receta e ragusë së vërtetë bolonjeze e cila daton që në vitin 1891, ' +
    'e përmendur për herë të parë me këtë emër në librin e kuzhinës së Pellegrino Artusi-t. Përbërësi i veçantë ' +
    'dhe i domosdoshëm i kësaj recete është qumështi i cili i heq ragusë aciditetin e domates dhe thartirën e verës.',
  imagePath: 'https://www.pernenat.al/wp-content/uploads/2019/05/spageti-bolonjeze.jpg',
  ingredients: [
    {
      amount: 250,
      name: 'spageti'
    },
    {
      amount: 200,
      name: 'mish i grirë'
    }
  ],
  name: 'Spageti Bolonjeze'
});

RECIPE_MAP_DATA.set(2, {
  description: 'Kek me mollë në 5 minuta',
  imagePath: 'https://cdnimpuls.com/living.al/images/kekekemememo.jpg',
  ingredients: [
    {
      amount: 3,
      name: 'Molle'
    },
    {
      amount: 3,
      name: 'Veze'
    },
    {
      amount: 9,
      name: 'Luge Sheqer'
    }
  ],
  name: 'Kek me mollë'
});

RECIPE_MAP_DATA.set(3, {
  description: 'Sallata Çezar është një sallatë shumë e famshme e krijuar nga shefi italian emigruar në Shtetet e ' +
    'Bashkuara të Amerikës Cesare Cardini. Për këtë arsye këtu bashkohen shumë mirë shija italiane (djathi Parmigiano) ' +
    'dhe shija amerikane (salca Worcestershire).',
  imagePath: 'https://unegatuaj.com/wp-content/uploads/2021/02/Sallate-cezar-1300x939.jpeg',
  ingredients: [
    {
      amount: 1,
      name: 'Tufe sallate jeshile'
    },
    {
      amount: 1,
      name: 'Fileto pule'
    },
    {
      amount: 2,
      name: 'Feta buke'
    }
  ],
  name: 'Sallatë Çezar me pulë'
});

RECIPE_MAP_DATA.set(4, {
  description: 'Sallata Çezar është një sallatë shumë e famshme e krijuar nga shefi italian emigruar në Shtetet e ' +
    'Bashkuara të Amerikës Cesare Cardini. Për këtë arsye këtu bashkohen shumë mirë shija italiane (djathi Parmigiano) ' +
    'dhe shija amerikane (salca Worcestershire).',
  imagePath: 'https://unegatuaj.com/wp-content/uploads/2021/02/Sallate-cezar-1300x939.jpeg',
  ingredients: [
    {
      amount: 1,
      name: 'Tufe sallate jeshile'
    },
    {
      amount: 1,
      name: 'Fileto pule'
    },
    {
      amount: 2,
      name: 'Feta buke'
    }
  ],
  name: 'AAAAAA'
});


////////////////////////////////////////
RECIPE_OBJ_DATA[0] = {
  description: 'Sallata Çezar është një sallatë shumë e famshme e krijuar nga shefi italian emigruar në Shtetet e ' +
    'Bashkuara të Amerikës Cesare Cardini. Për këtë arsye këtu bashkohen shumë mirë shija italiane (djathi Parmigiano) ' +
    'dhe shija amerikane (salca Worcestershire).',
  imagePath: 'https://unegatuaj.com/wp-content/uploads/2021/02/Sallate-cezar-1300x939.jpeg',
  ingredients: [
    {
      amount: 1,
      name: 'Tufe sallate jeshile'
    },
    {
      amount: 1,
      name: 'Fileto pule'
    },
    {
      amount: 2,
      name: 'Feta buke'
    }
  ],
  name: 'ZZZZZZZZ'
};

RECIPE_OBJ_DATA[1] = {
  description: 'Kjo recetë është receta e ragusë së vërtetë bolonjeze e cila daton që në vitin 1891, ' +
    'e përmendur për herë të parë me këtë emër në librin e kuzhinës së Pellegrino Artusi-t. Përbërësi i veçantë ' +
    'dhe i domosdoshëm i kësaj recete është qumështi i cili i heq ragusë aciditetin e domates dhe thartirën e verës.',
  imagePath: 'https://www.pernenat.al/wp-content/uploads/2019/05/spageti-bolonjeze.jpg',
  ingredients: [
    {
      amount: 250,
      name: 'spageti'
    },
    {
      amount: 200,
      name: 'Mish i grire'
    }
  ],
  name: 'Spageti Bolonjeze'
};

RECIPE_OBJ_DATA[2] = {
  description: 'Kek me mollë në 5 minuta',
  imagePath: 'https://cdnimpuls.com/living.al/images/kekekemememo.jpg',
  ingredients: [
    {
      amount: 3,
      name: 'Molle'
    },
    {
      amount: 3,
      name: 'Veze'
    },
    {
      amount: 9,
      name: 'Luge Sheqer'
    }
  ],
  name: 'Kek me mollë'
};

RECIPE_OBJ_DATA[3] = {
  description: 'Sallata Çezar është një sallatë shumë e famshme e krijuar nga shefi italian emigruar në Shtetet e ' +
    'Bashkuara të Amerikës Cesare Cardini. Për këtë arsye këtu bashkohen shumë mirë shija italiane (djathi Parmigiano) ' +
    'dhe shija amerikane (salca Worcestershire).',
  imagePath: 'https://unegatuaj.com/wp-content/uploads/2021/02/Sallate-cezar-1300x939.jpeg',
  ingredients: [
    {
      amount: 1,
      name: 'Tufe sallate jeshile'
    },
    {
      amount: 1,
      name: 'Fileto pule'
    },
    {
      amount: 2,
      name: 'Feta buke'
    }
  ],
  name: 'Sallatë Çezar me pulë'
};

RECIPE_OBJ_DATA[4] = {
  description: 'Sallata Çezar është një sallatë shumë e famshme e krijuar nga shefi italian emigruar në Shtetet e ' +
    'Bashkuara të Amerikës Cesare Cardini. Për këtë arsye këtu bashkohen shumë mirë shija italiane (djathi Parmigiano) ' +
    'dhe shija amerikane (salca Worcestershire).',
  imagePath: 'https://unegatuaj.com/wp-content/uploads/2021/02/Sallate-cezar-1300x939.jpeg',
  ingredients: [
    {
      amount: 1,
      name: 'Tufe sallate jeshile'
    },
    {
      amount: 1,
      name: 'Fileto pule'
    },
    {
      amount: 2,
      name: 'Feta buke'
    }
  ],
  name: 'AAAAAA'
};

export {RECIPE_OBJ_DATA, RECIPE_MAP_DATA};
