export const chat = async (req, res) => {
  try {
    const user = req.user;
    res.render('chat', { user: user });
  } catch (error) {
    req.logger.error(`[ERROR] -> ${error}`);
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
};
