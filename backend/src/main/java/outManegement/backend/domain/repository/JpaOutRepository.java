package outManegement.backend.domain.repository;

import org.springframework.stereotype.Component;
import outManegement.backend.domain.outlist.Out;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Component
public class JpaOutRepository implements OutRepository{
    private final EntityManager em;

    public JpaOutRepository(EntityManager em) {
        this.em = em;
    }

    @Override
    public Long save(Out out) {
        em.persist(out);
        return out.getId();
    }

    @Override
    public Optional<Out> findById(Long id) {
        Out out = em.find(Out.class, id);
        return Optional.ofNullable(out);
    }

    @Override
    public List<Out> findAllMember() {
        return null;
    }

    @Override
    public void clearAll() {

    }

    @Override
    public void deleteById(Long id) {

    }
}
