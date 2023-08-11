import {Image, View, StyleSheet} from 'react-native';

const NewImage = ({
  src,
  resizeMode,
  style,
}: {
  src: string;
  resizeMode: 'center' | 'contain' | 'cover' | 'stretch' | 'repeat';
  style?: {};
}) => {
  let url;
  switch (src) {
    // Verb be
    case 'be':
    case 'am':
    case 'is':
    case 'are':
    case 'was':
    case 'were':
      url = require('./be.png');
      break;

    // Question Words
    case 'how':
      url = require('./QuestionWords/how.png');
      break;
    case 'what':
      url = require('./QuestionWords/what.png');
      break;
    case 'when':
      url = require('./QuestionWords/when.png');
      break;
    case 'where':
      url = require('./QuestionWords/where.png');
      break;
    case 'who':
      url = require('./QuestionWords/who.png');
      break;
    case 'why':
      url = require('./QuestionWords/why.png');
      break;
    //////////////
    //////////////
    //////////////
    // Drinks
    case 'beer':
      url = require('./Drinks/beer.png');
      break;
    case 'milk':
      url = require('./Drinks/milk.png');
      break;
    case 'wine':
      url = require('./Drinks/wine.png');
      break;
    case 'tea':
      url = require('./Drinks/tea.png');
      break;
    case 'juice box':
      url = require('./Drinks/juice_box.png');
      break;
    //////////////
    //////////////
    //////////////

    // Buildings
    case 'bank':
      url = require('./Buildings/bank.png');
      break;
    case 'castle':
      url = require('./Buildings/castle.png');
      break;
    case 'church':
      url = require('./Buildings/church.png');
      break;
    case 'convenience store':
      url = require('./Buildings/convenience_store.png');
      break;
    case 'department store':
      url = require('./Buildings/department_store.png');
      break;
    case 'factory':
      url = require('./Buildings/factory.png');
      break;
    case 'home':
      url = require('./Buildings/home.png');
      break;
    case 'hospital':
      url = require('./Buildings/hospital.png');
      break;
    case 'hotel':
      url = require('./Buildings/hotel.png');
      break;
    case 'house':
      url = require('./Buildings/house.png');
      break;
    case 'mosque':
      url = require('./Buildings/mosque.png');
      break;
    case 'post office':
      url = require('./Buildings/post_office.png');
      break;
    case 'school':
      url = require('./Buildings/school.png');
      break;
    case 'stadium':
      url = require('./Buildings/stadium.png');
      break;
    case 'synagogue':
      url = require('./Buildings/synagogue.png');
      break;
    //////////////
    //////////////
    //////////////

    case 'bag':
      url = require('./bag.png');
      break;
    case 'bed':
      url = require('./bed.png');
      break;
    case 'book':
      url = require('./book.png');
      break;
    case 'text':
      url = require('./text.png');
      break;
    case 'news paper':
      url = require('./news_paper.png');
      break;
    case 'box':
      url = require('./box.png');
      break;
    case 'chair':
      url = require('./chair.png');
      break;
    case 'door':
      url = require('./door.png');
      break;
    case 'dress':
      url = require('./dress.png');
      break;
    case 'floor':
      url = require('./floor.png');
      break;
    case 'folder':
      url = require('./folder.png');
      break;
    case 'letter':
      url = require('./letter.png');
      break;
    case 'message':
      url = require('./message.png');
      break;
    case 'pen':
      url = require('./pen.png');
      break;
    case 'pencil':
      url = require('./pencil.png');
      break;
    case 'table':
      url = require('./table.png');
      break;
    case 'umbrella':
      url = require('./umbrella.png');
      break;
    case 'wall':
      url = require('./wall.png');
      break;
    case 'window':
      url = require('./window.png');
      break;
    //////////////
    //////////////
    //////////////

    // Green Food
    case 'apple':
      url = require('./Green_Food/apple.png');
      break;
    case 'avocado':
      url = require('./Green_Food/avocado.png');
      break;
    case 'banana':
      url = require('./Green_Food/banana.png');
      break;
    case 'bell pepper':
      url = require('./Green_Food/bell_pepper.png');
      break;
    case 'blueberries':
      url = require('./Green_Food/blueberries.png');
      break;
    case 'broccoli':
      url = require('./Green_Food/broccoli.png');
      break;
    case 'carrot':
      url = require('./Green_Food/carrot.png');
      break;
    case 'cherries':
      url = require('./Green_Food/cherries.png');
      break;
    case 'coconut':
      url = require('./Green_Food/coconut.png');
      break;
    case 'eggplant':
      url = require('./Green_Food/eggplant.png');
      break;
    case 'corn':
      url = require('./Green_Food/corn.png');
      break;
    case 'cucumber':
      url = require('./Green_Food/cucumber.png');
      break;
    case 'garlic':
      url = require('./Green_Food/garlic.png');
      break;
    case 'grapes':
      url = require('./Green_Food/grapes.png');
      break;
    case 'hot pepper':
      url = require('./Green_Food/hot_pepper.png');
      break;
    case 'kiwi':
      url = require('./Green_Food/kiwi.png');
      break;
    case 'lemon':
      url = require('./Green_Food/lemon.png');
      break;
    case 'mango':
      url = require('./Green_Food/mango.png');
      break;
    case 'melon':
      url = require('./Green_Food/melon.png');
      break;
    case 'olive':
      url = require('./Green_Food/olive.png');
      break;
    case 'onion':
      url = require('./Green_Food/onion.png');
      break;
    case 'peach':
      url = require('./Green_Food/peach.png');
      break;
    case 'pear':
      url = require('./Green_Food/pear.png');
      break;
    case 'pineapple':
      url = require('./Green_Food/pineapple.png');
      break;
    case 'potato':
      url = require('./Green_Food/potato.png');
      break;
    case 'strawberry':
      url = require('./Green_Food/strawberry.png');
      break;
    case 'sweet potato':
      url = require('./Green_Food/sweet_potato.png');
      break;
    case 'tangerine':
      url = require('./Green_Food/tangerine.png');
      break;
    case 'tomato':
      url = require('./Green_Food/tomato.png');
      break;
    case 'watermelon':
      url = require('./Green_Food/watermelon.png');
      break;
    //////////////
    //////////////
    //////////////

    // Professions
    case 'accountant':
      url = require('./Professions/accountant.png');
      break;
    case 'actor':
      url = require('./Professions/actor.png');
      break;
    case 'artist':
      url = require('./Professions/artist.png');
      break;
    case 'astronaut':
      url = require('./Professions/astronaut.png');
      break;
    case 'builder':
      url = require('./Professions/builder.png');
      break;
    case 'cardiologist':
      url = require('./Professions/cardiologist.png');
      break;
    case 'cleaner':
      url = require('./Professions/cleaner.png');
      break;
    case 'cook':
      url = require('./Professions/cook.png');
      break;
    case 'dentist':
      url = require('./Professions/dentist.png');
      break;
    case 'designer':
      url = require('./Professions/designer.png');
      break;
    case 'detective':
      url = require('./Professions/detective.png');
      break;
    case 'doctor':
      url = require('./Professions/doctor.png');
      break;
    case 'driver':
      url = require('./Professions/driver.png');
      break;
    case 'engineer':
      url = require('./Professions/engineer.png');
      break;
    case 'farmer':
      url = require('./Professions/farmer.png');
      break;
    case 'firefighter':
      url = require('./Professions/firefighter.png');
      break;
    case 'historian':
      url = require('./Professions/historian.png');
      break;
    case 'guide':
      url = require('./Professions/guide.png');
      break;
    case 'interpreter':
      url = require('./Professions/interpreter.png');
      break;
    case 'judge':
      url = require('./Professions/judge.png');
      break;
    case 'mechanic':
      url = require('./Professions/mechanic.png');
      break;
    case 'musician':
      url = require('./Professions/musician.png');
      break;
    case 'nutritionist':
      url = require('./Professions/nutritionist.png');
      break;
    case 'office clerk':
      url = require('./Professions/office_clerk.png');
      break;
    case 'orthopedist':
      url = require('./Professions/orthopedist.png');
      break;
    case 'pilot':
      url = require('./Professions/pilot.png');
      break;
    case 'police officer':
      url = require('./Professions/police_officer.png');
      break;
    case 'programmer':
      url = require('./Professions/programmer.png');
      break;
    case 'receptionist':
      url = require('./Professions/receptionist.png');
      break;
    case 'scientist':
      url = require('./Professions/scientist.png');
      break;
    case 'singer':
      url = require('./Professions/singer.png');
      break;
    case 'social worker':
      url = require('./Professions/social_worker.png');
      break;
    case 'student':
      url = require('./Professions/student.png');
      break;
    case 'taxi driver':
      url = require('./Professions/taxi_driver.png');
      break;
    case 'teacher':
      url = require('./Professions/teacher.png');
      break;
    case 'technologist':
      url = require('./Professions/technologist.png');
      break;
    case 'truck driver':
      url = require('./Professions/truck_driver.png');
      break;
    case 'welder':
      url = require('./Professions/welder.png');
      break;
    case 'writer':
      url = require('./Professions/writer.png');
      break;
    //////////////
    //////////////
    //////////////

    // Subject_Pronouns
    case 'he':
      url = require('./Pronouns/Subject_Pronouns/he.png');
      break;
    case 'i':
      url = require('./Pronouns/Subject_Pronouns/i.png');
      break;
    case 'it':
      url = require('./Pronouns/Subject_Pronouns/it.png');
      break;
    case 'she':
      url = require('./Pronouns/Subject_Pronouns/she.png');
      break;
    case 'they':
      url = require('./Pronouns/Subject_Pronouns/they.png');
      break;
    case 'we':
      url = require('./Pronouns/Subject_Pronouns/we.png');
      break;
    case 'you':
      url = require('./Pronouns/Subject_Pronouns/you.png');
      break;
    //////////////
    //////////////
    //////////////

    // Transport
    case 'ambulance':
      url = require('./Transport/ambulance.png');
      break;
    case 'bicycle':
      url = require('./Transport/bicycle.png');
      break;
    case 'bus':
      url = require('./Transport/bus.png');
      break;
    case 'car':
      url = require('./Transport/car.png');
      break;
    case 'delivery truck':
      url = require('./Transport/delivery_truck.png');
      break;
    case 'fire engine':
      url = require('./Transport/fire_engine.png');
      break;
    case 'minibus':
      url = require('./Transport/minibus.png');
      break;
    case 'motor scooter':
      url = require('./Transport/motor_scooter.png');
      break;
    case 'motorcycle':
      url = require('./Transport/motorcycle.png');
      break;
    case 'pickup truck':
      url = require('./Transport/pickup_truck.png');
      break;
    case 'police car':
      url = require('./Transport/police_car.png');
      break;
    case 'race car':
      url = require('./Transport/race_car.png');
      break;
    case 'scooter':
      url = require('./Transport/scooter.png');
      break;
    case 'semi-truck':
      url = require('./Transport/semi-truck.png');
      break;
    case 'suv':
      url = require('./Transport/suv.png');
      break;
    case 'taxi':
      url = require('./Transport/taxi.png');
      break;
    case 'tractor':
      url = require('./Transport/tractor.png');
      break;
    case 'trolleybus':
      url = require('./Transport/trolleybus.png');
      break;
    //////////////
    //////////////
    //////////////

    // Object_Pronouns
    case 'me':
      url = require('./Pronouns/Object_Pronouns/me.png');
      break;
    case 'you':
      url = require('./Pronouns/Object_Pronouns/you.png');
      break;
    case 'him':
      url = require('./Pronouns/Object_Pronouns/him.png');
      break;
    case 'her':
      url = require('./Pronouns/Object_Pronouns/her.png');
      break;
    case 'it':
      url = require('./Pronouns/Object_Pronouns/it.png');
      break;
    case 'us':
      url = require('./Pronouns/Object_Pronouns/us.png');
      break;
    case 'them':
      url = require('./Pronouns/Object_Pronouns/them.png');
      break;

    // Possessive_Adjectives
    case 'her ':
      url = require('./Pronouns/Possessive_Adjectives/her.png');
      break;
    case 'his':
      url = require('./Pronouns/Possessive_Adjectives/his.png');
      break;
    case 'its':
      url = require('./Pronouns/Possessive_Adjectives/its.png');
      break;
    case 'my':
      url = require('./Pronouns/Possessive_Adjectives/my.png');
      break;
    case 'our':
      url = require('./Pronouns/Possessive_Adjectives/our.png');
      break;
    case 'their':
      url = require('./Pronouns/Possessive_Adjectives/their.png');
      break;
    case 'your':
      url = require('./Pronouns/Possessive_Adjectives/your.png');
      break;

    //////////////
    //////////////
    //////////////

    // Family
    case 'children':
      url = require('./Family/children.png');
      break;
    case 'daughter':
      url = require('./Family/daughter.png');
      break;
    case 'father':
      url = require('./Family/father.png');
      break;
    case 'grandfather':
      url = require('./Family/grandfather.png');
      break;
    case 'grandmother':
      url = require('./Family/grandmother.png');
      break;
    case 'husband':
      url = require('./Family/husband.png');
      break;
    case 'mother':
      url = require('./Family/mother.png');
      break;
    case 'parents':
      url = require('./Family/parents.png');
      break;
    case 'sister':
      url = require('./Family/sister.png');
      break;
    case 'brother':
      url = require('./Family/brother.png');
      break;
    case 'son':
      url = require('./Family/son.png');
      break;
    case 'wife':
      url = require('./Family/wife.png');
      break;

    //////////////
    //////////////
    //////////////

    // Creatures
    case 'ant':
      url = require('./Creatures/ant.png');
      break;
    case 'badger':
      url = require('./Creatures/badger.png');
      break;
    case 'bat':
      url = require('./Creatures/bat.png');
      break;
    case 'bear':
      url = require('./Creatures/bear.png');
      break;
    case 'beaver':
      url = require('./Creatures/beaver.png');
      break;
    case 'bee':
      url = require('./Creatures/bee.png');
      break;
    case 'beetle':
      url = require('./Creatures/beetle.png');
      break;
    case 'bison':
      url = require('./Creatures/bison.png');
      break;
    case 'blowfish':
      url = require('./Creatures/blowfish.png');
      break;
    case 'bug':
      url = require('./Creatures/bug.png');
      break;
    case 'butterfly':
      url = require('./Creatures/butterfly.png');
      break;
    case 'camel':
      url = require('./Creatures/camel.png');
      break;
    case 'cat':
      url = require('./Creatures/cat.png');
      break;
    case 'chick':
      url = require('./Creatures/chick.png');
      break;
    case 'chipmunk':
      url = require('./Creatures/chipmunk.png');
      break;
    case 'cockroach':
      url = require('./Creatures/cockroach.png');
      break;
    case 'cow':
      url = require('./Creatures/cow.png');
      break;
    case 'crab':
      url = require('./Creatures/crab.png');
      break;
    case 'cricket':
      url = require('./Creatures/cricket.png');
      break;
    case 'crocodile':
      url = require('./Creatures/crocodile.png');
      break;
    case 'deer':
      url = require('./Creatures/deer.png');
      break;
    case 'dinosaur':
      url = require('./Creatures/dinosaur.png');
      break;
    case 'dodo bird':
      url = require('./Creatures/dodo_bird.png');
      break;
    case 'dog':
      url = require('./Creatures/dog.png');
      break;
    case 'dolphin':
      url = require('./Creatures/dolphin.png');
      break;
    case 'dove':
      url = require('./Creatures/dove.png');
      break;
    case 'dragon':
      url = require('./Creatures/dragon.png');
      break;
    case 'duck':
      url = require('./Creatures/duck.png');
      break;
    case 'eagle':
      url = require('./Creatures/eagle.png');
      break;
    case 'elephant':
      url = require('./Creatures/elephant.png');
      break;
    case 'fish':
      url = require('./Creatures/fish.png');
      break;
    case 'flamingo':
      url = require('./Creatures/flamingo.png');
      break;
    case 'fly':
      url = require('./Creatures/fly.png');
      break;
    case 'fox':
      url = require('./Creatures/fox.png');
      break;
    case 'giraffe':
      url = require('./Creatures/giraffe.png');
      break;
    case 'goat':
      url = require('./Creatures/goat.png');
      break;
    case 'gorilla':
      url = require('./Creatures/gorilla.png');
      break;
    case 'hedgehog':
      url = require('./Creatures/hedgehog.png');
      break;
    case 'hippo':
      url = require('./Creatures/hippo.png');
      break;
    case 'horse':
      url = require('./Creatures/horse.png');
      break;
    case 'kangaroo':
      url = require('./Creatures/kangaroo.png');
      break;
    case 'ladybug':
      url = require('./Creatures/ladybug.png');
      break;
    case 'leopard':
      url = require('./Creatures/leopard.png');
      break;
    case 'lion':
      url = require('./Creatures/lion.png');
      break;
    case 'lizard':
      url = require('./Creatures/lizard.png');
      break;
    case 'llama':
      url = require('./Creatures/llama.png');
      break;
    case 'lobster':
      url = require('./Creatures/lobster.png');
      break;
    case 'mammoth':
      url = require('./Creatures/mammoth.png');
      break;
    case 'mouse':
      url = require('./Creatures/mouse.png');
      break;
    case 'octopus':
      url = require('./Creatures/octopus.png');
      break;
    case 'orangutan':
      url = require('./Creatures/orangutan.png');
      break;
    case 'otter':
      url = require('./Creatures/otter.png');
      break;
    case 'owl':
      url = require('./Creatures/owl.png');
      break;
    case 'ox':
      url = require('./Creatures/ox.png');
      break;
    case 'panda':
      url = require('./Creatures/panda.png');
      break;
    case 'parrot':
      url = require('./Creatures/parrot.png');
      break;
    case 'peacock':
      url = require('./Creatures/peacock.png');
      break;
    case 'penguin':
      url = require('./Creatures/penguin.png');
      break;
    case 'pig':
      url = require('./Creatures/pig.png');
      break;
    case 'polar bear':
      url = require('./Creatures/polar_bear.png');
      break;
    case 'poodle':
      url = require('./Creatures/poodle.png');
      break;
    case 'rabbit':
      url = require('./Creatures/rabbit.png');
      break;
    case 'raccoon':
      url = require('./Creatures/raccoon.png');
      break;
    case 'ram':
      url = require('./Creatures/ram.png');
      break;
    case 'rat':
      url = require('./Creatures/rat.png');
      break;
    case 'rhino':
      url = require('./Creatures/rhino.png');
      break;
    case 'rooster':
      url = require('./Creatures/rooster.png');
      break;
    case 'scorpion':
      url = require('./Creatures/scorpion.png');
      break;
    case 'seal':
      url = require('./Creatures/seal.png');
      break;
    case 'shark':
      url = require('./Creatures/shark.png');
      break;
    case 'sheep':
      url = require('./Creatures/sheep.png');
      break;
    case 'shrimp':
      url = require('./Creatures/shrimp.png');
      break;
    case 'skunk':
      url = require('./Creatures/skunk.png');
      break;
    case 'sloth':
      url = require('./Creatures/sloth.png');
      break;
    case 'snail':
      url = require('./Creatures/snail.png');
      break;
    case 'snake':
      url = require('./Creatures/snake.png');
      break;
    case 'spider':
      url = require('./Creatures/spider.png');
      break;
    case 'squid':
      url = require('./Creatures/squid.png');
      break;
    case 'swan':
      url = require('./Creatures/swan.png');
      break;
    case 'T-Rex':
      url = require('./Creatures/T-Rex.png');
      break;
    case 'tiger':
      url = require('./Creatures/tiger.png');
      break;
    case 'tropical fish':
      url = require('./Creatures/tropical_fish.png');
      break;
    case 'turkey':
      url = require('./Creatures/turkey.png');
      break;
    case 'turtle':
      url = require('./Creatures/turtle.png');
      break;
    case 'two-hump camel':
      url = require('./Creatures/two-hump_camel.png');
      break;
    case 'water buffalo':
      url = require('./Creatures/water_buffalo.png');
      break;
    case 'whale':
      url = require('./Creatures/whale.png');
      break;
    case 'wolf':
      url = require('./Creatures/wolf.png');
      break;
    case 'worm':
      url = require('./Creatures/worm.png');
      break;
    case 'zebra':
      url = require('./Creatures/zebra.png');
      break;
    default:
      return null;
  }
  return (
    <Image style={[style, styles.image]} source={url} resizeMode={resizeMode} />
  );
};

export default NewImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
