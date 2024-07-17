namespace Aplicando_principio_de_una_única_responsabilidad___SRP;

public class ImprimirDatosPersona
{
    public void ImprimirDatos(Persona persona)
    {
        Console.WriteLine($"Nombre: {persona.nombre}");
        Console.WriteLine($"Edad: {persona.edad}");
        Console.WriteLine($"Dirección: {persona.direccion}");
        Console.WriteLine($"Correo electrónico: {persona.correoElectronico}");
    }
}