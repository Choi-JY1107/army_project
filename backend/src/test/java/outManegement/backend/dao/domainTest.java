package outManegement.backend.dao;

import org.junit.jupiter.api.Test;
import outManegement.backend.dao.outlist.Excursion;
import outManegement.backend.dao.outlist.Out;
import outManegement.backend.dao.outlist.OverNight;
import outManegement.backend.dao.outlist.Vacation;

public class domainTest {

    @Test
    public void createOut(){
        Out vac = new Vacation();
        Out exc = new Excursion();
        Out over = new OverNight();
    }
}
