namespace Aplicando_principio_de_una_única_responsabilidad___SRP;

public class EnviarCorreoElectronico
{
    public void EnviarCorreo_Electronico(Persona persona, string mensaje)
    {
        Console.WriteLine($"Enviando correo a {persona.correoElectronico}: {mensaje}");
    }
}