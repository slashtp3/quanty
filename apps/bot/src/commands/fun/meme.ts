import {
  CommandReturnType,
  Category,
  Command,
  SlashCommand,
} from '@quanty/framework'
import axios from 'axios'
import { MessageEmbed } from 'discord.js'

import { MemeType } from '../../types/Meme'

@SlashCommand('meme', {
  description: 'Will send a random meme',
})
@Category('fun')
export class MemeCommand extends Command {
  async run(): CommandReturnType {
    await axios
      .get('https://meme-api.herokuapp.com/gimme')
      .then(({ data }: { data: MemeType }) => {
        const embed = new MessageEmbed()
          .setTitle(data.title)
          .setURL(data.postLink)
          .setImage(data.url)
          .setFooter({ text: `${data.subreddit} - ${data.ups}` })
          .setTimestamp(Date.now())
          .setColor('#FF5F9F')

        return {
          embeds: [embed],
        }
      })
  }

  async error(): CommandReturnType {
    throw new Error('Method not implemented.')
  }
}
