import { minecraft } from '../data/minecraft';
import { chooseRand } from '../helper/chooseRand';

/**MinecraftOre will generate a random Minecraft ore*/
export const minecraftOre = () => chooseRand('ore', minecraft);

/**MinecraftWood will generate a random Minecraft wood*/
export const minecraftWood = () => chooseRand('wood', minecraft);

/**MinecraftArmorTier will generate a random Minecraft armor tier*/
export const minecraftArmorTier = () => chooseRand('armortier', minecraft);

/**MinecraftArmorPart will generate a random Minecraft armor part*/
export const minecraftArmorPart = () => chooseRand('armorpart', minecraft);

/**MinecraftWeapon will generate a random Minecraft weapon*/
export const minecraftWeapon = () => chooseRand('weapon', minecraft);

/**MinecraftDye will generate a random Minecraft dye*/
export const minecraftDye = () => chooseRand('dye', minecraft);

/**MinecraftFood will generate a random Minecraft food*/
export const minecraftFood = () => chooseRand('food', minecraft);

/**MinecraftAnimal will generate a random Minecraft animal*/
export const minecraftAnimal = () => chooseRand('animal', minecraft);
