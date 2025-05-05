const axios = require('axios');

module.exports = () => ({
  async CoordenadasDeEndereco(endereco) {
    try {
      const params = {
        addressdetails: 1,
        q: endereco,
        format: 'jsonv2',
        limit: 1,
      };

      const enderecoCoord = await axios.get(
        'https://nominatim.openstreetmap.org/search',
        {
          params,
          timeout: 5000,
          headers: {
            'User-Agent':
              'Mapeamento Colaborativo/1.0 (rafael_arashiro1@yahoo.com.br)',
          },
        },
      );

      if (!enderecoCoord.data.length) {
        console.error('Endereço não encontrado:', endereco);
        return { erro: 'Endereço não encontrado', endereco };
      }

      const resultado = enderecoCoord.data[0];

      if (!resultado.lat || !resultado.lon) {
        console.error('Coordenadas inválidas na resposta', endereco);
        return { erro: 'Coordenadas inválidas na resposta', endereco };
      }

      return {
        localx: parseFloat(resultado.lat),
        localy: parseFloat(resultado.lon),
        endereco_completo: resultado.display_name,
      };
    } catch (error) {
      console.error('Erro na geocodificação:', {
        endereco,
        erro: error.message,
        stack: error.stack,
      });

      return {
        erro: 'Falha temporária no serviço de geocodificação',
      };
    }
  },
});
